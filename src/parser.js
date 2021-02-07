import { domain } from './constants/config';
import { getEmojiForTitle } from './utils';

export const watchingAnimeDocParser = (doc) => {
  let watching = [];
  const watchimgAnimeList = [...(doc.querySelectorAll('.table.table-responsive2 tBody tr') || [])];

  watching = watchimgAnimeList.map((node) => {
    const name = node.querySelector('.text-left.table-100 a').innerHTML;
    const link = domain + node.querySelector('.text-left.table-100 a').href;
    const id = link.split('-')[link.split('-').length - 1];

    const episodes = node.querySelector("td[data-label='Эпизоды'");
    const episodesCnt = episodes.innerHTML.split('/')[1].split(' ')[1];
    const maxEpisodesCnt = episodes.querySelector("span[class='small']").innerHTML;

    return {
      id,
      name,
      link,
      episodesCnt,
      maxEpisodesCnt,
    };
  });

  return watching;
};

export const anime2TelegramMessageBody = (anime) => {
  const body = {
    disable_notification: false,
    parse_mode: 'HTML',
  };

  body.text = `<b>${getEmojiForTitle()} ${anime.name}</b>\n
  ⭕ <i>Вийшов новий ${anime.episodesCnt} епізод</i>
  🎬 Episodes: ${anime.episodesCnt}/${anime.maxEpisodesCnt}`;

  body.reply_markup = {
    inline_keyboard: [
      [
        {
          text: '🟢 Посилання ↗️',
          url: anime.link,
        },
      ],
    ],
  };

  return body;
};

export const error2TelegramMessageBody = (error) => {
  const body = {
    disable_notification: false,
    parse_mode: 'HTML',
  };

  body.text = `<b>🆘⚠️ Bot Error  🛑⚠️</b>\n
<b>Name:</b>\n    ${error?.name || 'no name'}\n
<b>Description:</b>\n    <code>${error?.message || 'no description'}</code>`;

  return body;
};
