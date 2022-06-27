import ChallengeService from './services/ChallengeService';
import BlocksRepositoryAPI from './repositories/BlocksRepositoryAPI';

let service = new ChallengeService(new BlocksRepositoryAPI());
let sortedBlocks = service.execute();
console.log('Respuesta:');
console.log(sortedBlocks);
