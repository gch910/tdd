const assert = require('assert');
const { returns } = require('chai-spies');

describe('Returns three', () => {
    it('returns the number three', () => {
        const actual = returnsThree();
        const expected = 3;
        assert.strictEqual(actual, expected);
    })
});

describe('reciprocal(num)', () => {

});