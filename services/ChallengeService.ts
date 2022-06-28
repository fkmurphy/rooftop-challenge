import {BlocksRepository} from '../repositories/BlocksRepository';
import endpoint from '../endpoints.config';

export default class ChallengeService {

  constructor(private readonly repo: BlocksRepository) {}

  async findNext(value:string, position:number, blocks:Array<string>, token: string): Promise<number> {
    let blocksToFind = blocks.slice(position+1);

    for (let block of blocksToFind) {
      let isNextBlock :any = await this.repo.areSequential(value, block, token); 
      if (isNextBlock) {
        return blocks.indexOf(block)
      }
    }
    return -1;
  }

  async check(blocks: Array<string> = [], token: string = '') : Promise<string[]> {
    let blocksCount: number = blocks.length;
    if (blocksCount <= 2) {
      return blocks;
    }

    let index: number = 0;
    while (index < blocksCount-1){
      let nextIndexBlock:any = await this.findNext(blocks[index], index, blocks, token);
      if (nextIndexBlock > 0) {
        let valueNext = blocks[nextIndexBlock];
        blocks[nextIndexBlock] = blocks[index+1];
        blocks[index+1] = valueNext;
      }
      index++;
    }

    return blocks;

  }

  async execute(): Promise<string[]> {
    console.log('Email: ' , endpoint.email);
    let token: string = await this.repo.getToken();
    let blocks:string[] = await this.repo.getBlocks(token);
    console.log('Los bloques a ordenar son:');
    console.log(blocks);
    console.log('Aguarde un momento...');
    return await this.check(blocks, token);
  }
}
