/* eslint-disable class-methods-use-this */
import fetch from 'node-fetch';
import { TOKEN } from '../constants/config';

class TelegramService {
  async sendMessage(chatId, body) {
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, ...body }),
    });

    return response;
  }
}

export default new TelegramService();
