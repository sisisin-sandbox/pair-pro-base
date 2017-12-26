
import { calcScore, parse } from './lib';

function main (){
  const [arg] = process.argv.filter((v,i) => i > 1);
  console.log(arg)
  console.log(parse(arg))
  console.log(calcScore(parse(arg)));
}

main();
