import {BlocksRepository} from './BlocksRepository';
import endpoint from '../endpoints.config';
//import { RequestInfo, RequestInit } from 'node-fetch';

export default class BlocksRepositoryAPI implements BlocksRepository {
  readonly BASE_URL: string = endpoint.UrlBase;
  readonly EMAIL: string = endpoint.email;

  async getToken(): Promise<string> {
    return fetch(`${this.BASE_URL}/token?email=${this.EMAIL}`)
      .then((response: any) => {
        if(!response.ok) {
          throw new Error('');
        }
        return response.json() as Promise<string>
      }).then((data: any) => {
        return data.token;
      })
  }

  async getBlocks(token: string): Promise<string[]> {
    return fetch(`${this.BASE_URL}/blocks?token=${token}`)
      .then((response:any) => {
        if(!response.ok) {
          throw new Error('');
        }
        return response.json() as Promise<string[]>;
      }).then((response: any) => {
        return response.data;
      });
  }

  async areSequential(blockOne: string, blockTwo: string, token: string): Promise<boolean> {
    return fetch(`${this.BASE_URL}/check?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ blocks: [blockOne, blockTwo] }) 
      })
      .then((response:any) => {
        if(!response.ok) {
          throw new Error('');
        }
        return response.json() as Promise<Boolean>;
      }).then((response:any) => {
        return response.message
      }).catch((e: any) => console.log('error', e));
  }
}
