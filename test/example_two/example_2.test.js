import exampleTwoEntryPoint from '../../src/example_two/example_2';

describe('when both x and y are strings', () => {
  describe('and x and y are completely different words', () => {
    const x = 'Hello';

    const y = 'World';

    test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
  });
});

describe('when both x and y are numbers', () => {
  describe('and x and y are completely different numbers', () => {
    const x = 42;

    const y = 7315;

    test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
  });
});

describe('when x is a string and y is a number', () => {
  const x = 'two';

  const y = 2;
  test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
});

describe('when x is a number and x is a string', () => {
  const x = 4;

  const y = 'Sixty';

  test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
});
