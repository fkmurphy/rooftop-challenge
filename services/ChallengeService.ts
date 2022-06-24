import {BlocksRepository} from '../repositories/BlocksRepository';

export default class ChallengeService {
  constructor(private readonly repo: BlocksRepository) {}

  async getBlocks() {
    return await this.repo.getBlocks()
  }
}
