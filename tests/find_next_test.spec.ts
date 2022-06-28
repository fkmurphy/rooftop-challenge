import ChallengeService from '../services/ChallengeService'
import BlocksRepositoryMock from './BlocksRepositoryMock'

it('test complete execute service with three elements - success', async () => {
  const sortedBlocks = ['a', 'b', 'c'];
  const mock = new BlocksRepositoryMock(['a', 'c', 'b'], sortedBlocks);
  const service = new ChallengeService(mock);
  let response = await service.execute()

  expect(response).toEqual(sortedBlocks);
});

it('test findNext', async () => {
  const sortedBlocks = ['a', 'b', 'c'];
  const mock = new BlocksRepositoryMock(['a', 'c', 'b'], sortedBlocks);
  const service = new ChallengeService(mock);

  let nextPosition = await service.findNext(
    'a',
    0,
    await mock.getBlocks(''),
    ''
  );

  expect(nextPosition).toEqual(2);
});
