import ChallengeService from '../services/ChallengeService'
import BlocksRepositoryMock from './BlocksRepositoryMock'

describe('Mutliples cases for check() - success', () => {
  let tests = [
    [
      ["f319", "3720", "4e3e", "46ec", "c7df", "c1c7", "80fd", "c4ea"],
      ["f319", "46ec", "c1c7", "3720", "c7df", "c4ea", "4e3e", "80fd"]
    ],
    [
      ["f319", "4e3e", "46ec", "c7df", "c4ea", "c1c7", "80fd", "3720"],
      ["f319", "46ec", "c1c7", "3720", "c7df", "c4ea", "4e3e", "80fd"]
    ],
    [
      ["f319", "c1c7", "80fd", "4e3e", "c4ea", "3720", "46ec", "c7df"],
      ["f319", "46ec", "c1c7", "3720", "c7df", "c4ea", "4e3e", "80fd"]
    ],
    [
      ["f319", "c1c7", "80fd"],
      ["f319", "c1c7", "80fd"]
    ],
    [
      ["f319", "80fd", "c1c7"],
      ["f319", "c1c7", "80fd"]
    ],
    [
      ["f319", "80fd"],
      ["f319", "80fd"]
    ],
    [
      ["f319", "80fd", "haf3", "80f3", "90fd", "hefd", "80f4", "40fd"],
      ["f319", "80fd", "80f3", "90fd", "80f4", "40fd", "haf3", "hefd"]
    ]
  ];
  it.each(tests)('test check(%i) exepect %i', async (blocks,expected) => {
    const mock = new BlocksRepositoryMock(blocks, expected);
    const service = new ChallengeService(mock);
    let response = await service.check(blocks, 'token-test')

    expect(response).toEqual(expected);
  })
});
