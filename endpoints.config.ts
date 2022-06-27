import * as dotenv from 'dotenv';

dotenv.config();

export default {
  UrlBase: process.env.BASE_API ?? '',
  ApiToken: process.env.TOKEN ?? '',
  email: process.env.EMAIL ?? '',
}
