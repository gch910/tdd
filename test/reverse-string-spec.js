const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;

chai.use(spies);

const reverseString = require('../problems/reverse-string');

describe("reverseString()", () => {
    it("should expect the exact reverse of input string", () => {
        //arrange
        const input = "fun";
        const expected = "nuf";

        //act
        const actual = reverseString(input);

        //assert
        expect(actual).to.equal(expected);

    })
})




