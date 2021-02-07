/* eslint-disable import/prefer-default-export */
/* eslint-disable quote-props */
import { domain, cookie } from './constants/config';
import fetch from 'node-fetch';

const headers = {
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'accept-language': 'uk-UA,uk;q=0.9',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
  cookie,
};

export const fetchPage = async ({ page }) => {
  const response = await fetch(page.includes('://') ? page : `${domain}${page}`, {
    headers,
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
  });
  const text = await response.text();
  return { response, text };
};
