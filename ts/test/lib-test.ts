import { expect } from 'chai';
import {calcScore, parse} from '../src/lib';

const parseCases = [
  {
    in: '43x12',
    out:[['4', '3'], ['x'], ['1','2']],
  },
  {
    in: ['00', '00', '00','00','00',].join(''),
    out:[['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'], ['0', '0'] ],
  }
]
describe('parse', () => {
  parseCases.forEach(c => {
    it(c.in, () => {
      expect(parse(c.in)).to.deep.eq(c.out);
    });
  });
});
