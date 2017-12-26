enum SPECIAL_CHAR {
  STRIKE = 'x',
  SPARE = '/',
  MISS = '-',
  GATER = 'g',
  foul = 'f',
}

type Frame = string[];

export function calcFrame([first, second]: Frame): number {
  if(first === void 0 && second === void 0) return 0;
  if(first === 'x') {return 10;}
  if(second === 'x') {return 10;}
  return +first + +second;
}

export function calcScore(frames: Frame[]) {
  function calcStrike(first: Frame, second: Frame = [], third: Frame = []): number {
    if (second.length === 1) {
      if (third.length === 1) {
        return 30;
      } else {
        return 10 + calcFrame(second) + calcFrame([third[0], '0']);
      }
    } else {
      return 10 + calcFrame(second);
    }
  }

  let score = 0;
  for(var i = 0; i < frames.length; i++) {
    const [first] = frames[i];

    if (first === SPECIAL_CHAR.STRIKE) {
      score += calcStrike(frames[i], frames[i+1], frames[i+2]);
    } else {
      score += frames[i].reduce((prev, curr) => prev + +curr, 0);
    }
  }

  return score;
}


export function parse(arg: string){
  const ret:any[] = [];

  let first = true;
  let out: any[] = [];

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
