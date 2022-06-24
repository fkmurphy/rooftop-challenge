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

function areSequential(blockOne: string, blockTwo: string) {
  let expected = tests[indexValueToExpected][1];
  let indexOne = expected.indexOf(blockOne);
  let indexTwo = expected.indexOf(blockTwo);
  return indexOne+1 === indexTwo;
}

function findNext(value:string, position:number, blocks:Array<string>) {
  let nextBlock:any = blocks.slice(position+1).find(
    block => areSequential(value, block)
  );
  return blocks.indexOf(nextBlock);
}

function check(blocks: Array<string> = [], token: string = '') {
  console.log('lenght', blocks.length, blocks)
  if (blocks.length <= 2) {
    console.log('lenght <2')
    return blocks;
  }
  blocks.forEach((value, index) => {
    let indexNext = findNext(value, index, blocks);
    if (indexNext>0) {
      let valueNext = blocks[indexNext];
      blocks[indexNext] = blocks[index+1];
      blocks[index+1] = valueNext;
    }
  })

  return blocks;
}

let indexValueToExpected = 0;
let service = new ChallengeService(new BlocksRepositoryAPI());
service.getBlocks()
tests.forEach((value, index) => {
  indexValueToExpected = index;
  let result = check(value[0], "b93ac073-eae4-405d-b4ef-bb82e0036a1d");
  if (result.join('') === value[1].join('')) {
    console.log("Lo resolviste correctamente!");
  } else {
    console.log("Todava puedes intentarlo!");
    throw 'No result—' ;
  }
  console.log(result);
});
