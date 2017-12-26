enum SPECIAL_CHAR {
  STRIKE = 'x',
  SPARE = '/',
  MISS = '-',
  GATER = 'g',
  foul = 'f',
}


export function calcScore(arg: string) {
  return arg;
}


export function parse(arg: string){
  const ret = [];

  const first = true;
  let out = [];

  // 一文字ずつになる
  Array.from(arg).forEach(c => {
    if (first) {
      out = [];
      first = false;
    }

    out.push(c)

    if (c === SPECIAL_CHAR.STRIKE
      || out.length == 2) {
      first = true;
      ret.push(out);
      return;
    }
  });

  return ret;
}
