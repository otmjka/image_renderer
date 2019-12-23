import resetDatabase from '../resetDatabase';

describe('dummyTest', () => {
  beforeAll(async (done) => {
    await resetDatabase();
    done();
  });

  test('dummyTest', () => {
    expect(1).toBe(1);
  });
});
