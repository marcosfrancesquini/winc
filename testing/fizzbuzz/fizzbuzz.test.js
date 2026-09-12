const fizzbuzz = require("./fizzbuzz");

describe('fizzbuzz tests', () => {
  test('Numbers divisible by 15 should return FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(300)).toBe('FizzBuzz');
  })

  test('Numbers divisible by 5 should return Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
  })

  test('Numbers divisible by 3 should return Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
  })

  test('Non-numbers should throw an Error', () => {
    expect(() => fizzbuzz()).toThrow();
    expect(() => fizzbuzz({})).toThrow();
    expect(() => fizzbuzz('fizz')).toThrow();
  })

  test('Other numbers should be returned unchanged', () => {
    expect(fizzbuzz(8)).toBe(8);
    expect(fizzbuzz(11)).toBe(11);
  })
})