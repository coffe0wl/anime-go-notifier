/* eslint-disable import/prefer-default-export */
import { users, watchingAnimePath, adminChatId } from './constants/config';
import { fetchPage } from './fetch';
import { getDOM, compareAnimeData } from './utils';
import { watchingAnimeDocParser, error2TelegramMessageBody, anime2TelegramMessageBody } from './parser';
import TelegramService from './services/telegram';
import Storage from './services/storage';

export const handler = async () => {
  try {
    Promise.all(
      users.map(async (user) => {
        // fetch anime page
        const watchingAnimePage = await fetchPage({ page: watchingAnimePath(user.nickname) });

        // extract DOM
        const watchingAnimeDoc = getDOM(watchingAnimePage.text);

        // extract anime objects from DOM
        const updatedWatchingAnimeData = watchingAnimeDocParser(watchingAnimeDoc);

        // extract anime in which a new series was released
        const { newAnime } = await compareAnimeData(user.chatId, updatedWatchingAnimeData);

        // notify user about anime updates
        Promise.all(newAnime.map(async (anime) => TelegramService.sendMessage(user.chatId, anime2TelegramMessageBody(anime))));

        // persist fetched anime data
        Storage.setItems(user.chatId, updatedWatchingAnimeData);
      }),
    );
  } catch (err) {
    TelegramService.sendMessage(adminChatId, error2TelegramMessageBody(err));
  }
};
