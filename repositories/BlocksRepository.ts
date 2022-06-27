export interface BlocksRepository {
  getToken(): Promise<string>;
  getBlocks(token: string): Promise<[]>;
  areSequential(blockOne: string, blockTwo: string, token: string): Promise<Boolean>
}
