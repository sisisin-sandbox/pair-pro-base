
import { calcScore } from './lib';

function main (){
  const [arg] = process.argv.filter((v,i) => i > 1);
  console.log(calcScore(arg));
}

main();
