import {calculate} from '../index.js';
import assert from 'assert';

describe('calculate', function () {
  it('should return the sum of two numbers', function () {
    const result = calculate(2, 3, 'plus');
    assert.strictEqual(result, 5);
  });})

  describe('calculate', function () {
    it('should return the difference of two numbers', function () {
      const result = calculate(3, 2, 'minus');
      assert.strictEqual(result, 1);
    });})

    describe('calculate', function () {
      it('should throw out an error', function () {
        const result = calculate(3, 2, 'womp');

      });})