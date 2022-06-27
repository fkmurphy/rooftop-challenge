import ChallengeService from './services/ChallengeService';
import BlocksRepositoryAPI from './repositories/BlocksRepositoryAPI';

let service = new ChallengeService(new BlocksRepositoryAPI());
service.execute().then(sortedBlocks => {
  console.log('Respuesta:');
  console.log(sortedBlocks);
})
