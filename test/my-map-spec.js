const chai = require("chai");
const assert = require("assert");
const spies = require("chai-spies");
const expect = chai.expect;
chai.use(spies);

describe("myMap()", () => {
    let inputArray;
    beforeEach("assign new instance of an array", () => {
       inputArr = [];

    })

    it("should return a new array", () => {
        inputArr = [1,2, 3]
        const callback = el => el;
        expect(myMap(inputArr, callback)).to.be.an.instanceof(Array)
    })
})