/// <reference path="jasmine.js" />
/// <reference path="../Scripts/calculator.js" />

describe("Calc.add", function () {

    it("should add two numbers", function () {
        var result = new Calc().add(2, 3);
        expect(result).tobe(5);
    });

    it("should subtract two numbers", function () {
        var result = new Calc().sub(5, 3);
        expect(result).tobe(2);
    });

    it("should multiply two numbers", function () {
        var result = new Calc().multi(2, 3);
        expect(result).tobe(6);
    });

    it("should divide two numbers", function () {
        var result = new Calc().divi(6, 2);
        expect(result).tobe(3);
    });

});
