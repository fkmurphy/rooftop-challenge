export interface BlocksRepository {
  getBlocks(): Promise<[]>;
}
