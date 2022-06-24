import * as dotenv from 'dotenv';

export default {
  UrlBase: process.env.BASE_URL ?? '',
  ApiToken: process.env.TOKEN ?? '',
}
