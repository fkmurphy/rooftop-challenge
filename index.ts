import ChallengeService from './services/ChallengeService';
import BlocksRepositoryAPI from './repositories/BlocksRepositoryAPI';

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



let indexValueToExpected = 0;
let service = new ChallengeService(new BlocksRepositoryAPI());
let sortedBlocks = service.execute();
console.log('Respuesta:');
console.log(sortedBlocks);
