import { expect } from 'chai';
import {calcFrame, calcScore, parse} from '../src/lib';

const parseCases = [
  {
    in: ['00', '00', '00','00','00',].join(''),
    out:[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'] ],
  },
  {
    in: '1234123412',
    out:[['1', '2'], ['3', '4'], ['1', '2'], ['3', '4'], ['1', '2'] ],
  },
  {
    in: 'xxxxx',
    out:[['x'],['x'],['x'],['x'],['x'],],
  },
  {
    in: '1x63x5300',
    out:[['1', 'x'], ['6', '3'], ['x'], ['5','3'] , ['0','0']],
  },
  {
    in: '43x12',
    out:[['4', '3'], ['x'], ['1','2']],
  },
]
describe('parse', () => {
  parseCases.forEach(c => {
    it(c.in, () => {
      expect(parse(c.in)).to.deep.eq(c.out);
    });
  });
});


describe('calcFrame', () => {
  const cases = [
    { in: ['0', '0'], out: 0},
    { in: ['x'], out: 10 },
    { in: ['1', '2'], out: 3 },
  ]

  cases.forEach(c => {
    it(JSON.stringify(c.in), () => {
      expect(calcFrame(c.in)).to.eq(c.out);
    })
  })
})

describe('calcScore', () => {
  const cases = [
    {in: [['1','1']], out: 2},
    {in: [['1','1'], ['x']], out: 12},
    {in: [['1','1'], ['x'], ['2','4']], out: 24},
  ]
  cases.forEach(c => {
    it('only 数字' + c.in, () => {
      expect(calcScore(c.in)).to.eq(c.out);
    })

  })
})
