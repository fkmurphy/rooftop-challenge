import {BlocksRepository} from './BlocksRepository';
import endpoint from '../endpoints.config';
import { RequestInfo, RequestInit } from 'node-fetch';

export default class BlocksRepositoryAPI implements BlocksRepository {
  readonly BASE_URL: string = endpoint.UrlBase;
  readonly TOKEN: string = endpoint.ApiToken;
  //readonly fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  //

  async getBlocks(): Promise<[]> {
  const fetch = (url: RequestInfo, init?: RequestInit) =>
    import('node-fetch').then(({ default: fetch }) => fetch(url, init));

    return fetch(`${this.BASE_URL}/blocks?token=${this.TOKEN}`)
      .then((response:any) => {
        console.log('show response', response)
        if(!response.ok) {
          throw new Error('');
        }
        return response.json() as Promise<[]>;
      });
  }
}
