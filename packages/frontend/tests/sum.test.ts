import sum from '../src/helpers/sum';

describe('Sum function test', () => {
  it('should sum numebers corectly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
