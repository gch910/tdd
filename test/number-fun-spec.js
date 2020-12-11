const chai = require("chai");
const assert = require("assert");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("Returns three", () => {
  it("returns the number three", () => {
    const actual = returnsThree();
    const expected = 3;
    assert.strictEqual(actual, expected);
  });
});

describe("reciprocal(num)", () => {
  context("number is between 1 and 1000000", () => {
    it("returns the reciprocal of the input number", () => {
      const num = 42;
      const num2 = 5;
      const actual = reciprocal(num);
      const actual2 = reciprocal(num2);
      const expected = 1 / 42;
      const expected2 = 1 / 5;

      assert.strictEqual(actual, expected);
      assert.strictEqual(actual2, expected2);
    });
  });
  context("number is less than 1 or greater than 1000000", () => {
    it("if number is less than one, throw TypeError", () => {
      const input = -5;
      //const input2 = 2000000;
      assert.throws(
        () => reciprocal(input),
        TypeError,
        "Number must be between 1 and 1000000"
      );
    });

    it("if number is greater than 1000000, throw TypeError", () => {
      const input = 2000000;
      assert.throws(
        () => reciprocal(input),
        TypeError,
        "Number must be between 1 and 1000000"
      );
    });
  });
});
