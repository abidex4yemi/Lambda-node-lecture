function sum(a, b) {
  return a + b;
}

describe('sum() function', () => {
  it('Should sum two numbers', () => {
    const actualOutput = sum(1, 2);
    expect(actualOutput).toBe(3);
  });

  it('Should return null if passed an arg which is not number', () => {});
});
