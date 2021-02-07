// telegram bot config
export const TOKEN = 'telegram_bot_token';
export const adminChatId = 547022978;

// users list configuration
export const users = [{ nickname: 'animeGo_nickname', chatId: 'telegram_chat_id' }];

// fetch config
export const domain = 'https://animego.org';
export const cookie = 'PHPSESSID=j7dgvnls9n57t29afimt5kl8ni; device_view=full; _ym_uid=1612683552147960373; _ym_d=1612683552; _ym_isad=2; _ym_visorc=b; _ga=GA1.2.1730766300.1612683552; _gid=GA1.2.9138438.1612683552';

export const watchingAnimePath = (nickname) => `/user/${nickname}/mylist/anime/watching`;

// TODO: IMPORTANT: rename this file to "config.js"
