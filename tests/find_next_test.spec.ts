import ChallengeService from '../services/ChallengeService'
import BlocksRepositoryMock from './BlocksRepositoryMock'


test('sequential', async () => {
  const sortedBlocks = ['a', 'b', 'c'];
  const mock = new BlocksRepositoryMock(['a', 'c', 'b'], sortedBlocks);
  const service = new ChallengeService(mock);
  let response = await service.execute()

  expect(response).toEqual(sortedBlocks);

});
