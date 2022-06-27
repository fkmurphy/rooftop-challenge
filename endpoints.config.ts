import * as dotenv from 'dotenv';

dotenv.config();

export default {
  UrlBase: process.env.BASE_API ?? '',
  email: process.env.EMAIL ?? '',
}
