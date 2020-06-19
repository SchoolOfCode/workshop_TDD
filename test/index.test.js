import exampleOneEntryPoint from '../src';

describe('when supplied with an event', () => {
  const event = {
    name: 'Tim Knight',
    someData: true,
  };

  test('it should receive that event back', () => {
    const actual = exampleOneEntryPoint({ event });

    expect(actual)
      .toEqual(event);
  });
});
