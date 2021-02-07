import { JSDOM } from 'jsdom';
import StorageService from './services/storage';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const getDOM = (HTMLString) => new JSDOM(HTMLString).window.document;

export const getEmojiForTitle = () => {
  const emojiList = ['🆕', '⚜️', '🇯🇵', '⛩', '🏯', '👹', '🉐', '🍣', '🍘', '🍙'];
  return emojiList[getRandomInt(emojiList.length)];
};

export const extractHashes = (list) => list.map(({ hashCode }) => hashCode);

export const compareAnimeData = async (key, fetchedAnimeList) => {
  const pastFetchedAnime = await StorageService.getItems(key);

  console.log('PAST EVENTS - ', pastFetchedAnime);

  const result = {
    newAnime: [],
    pastAnime: [],
  };

  // extract anime with new episodes
  fetchedAnimeList.forEach((anime) => {
    const pastSameAnimeData = pastFetchedAnime?.find((pastAnime) => pastAnime.id === anime.id);
    if (!pastSameAnimeData) return;
    if (pastSameAnimeData.episodesCnt < anime.episodesCnt) result.newAnime.push(anime);
    else result.pastAnime.push(anime);
  });

  return result;
};
