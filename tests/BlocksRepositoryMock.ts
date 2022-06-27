import {BlocksRepository} from '../repositories/BlocksRepository';

export default class BlocksRepositoryMock implements BlocksRepository {
  constructor(private readonly blocks: string[], private readonly sortedBlocks: string[]) {}

  getToken(): Promise<string>{
    return Promise.resolve('');
  }

  getBlocks(token: string): Promise<string[]> {
    return Promise.resolve(this.blocks);
  }

  areSequential(blockOne: string, blockTwo: string, token: string): Promise<Boolean> {
    return Promise.resolve(this.sortedBlocks.indexOf(blockOne) + 1 === this.sortedBlocks.indexOf(blockTwo));
  }

}
