const expect = require("chai").expect;
const asyncForEach = require("..");

describe("asyncForEach", function() {
    it("iterates in order", function(done) {
        const arr = [1, 2, 3, 4, 5];
        const result = [];
        asyncForEach(arr, function(value, index, next) {
            result[index] = value;
            next();
        }, function() {
            expect(result).to.deep.equal(arr);
            done();
        });
    });

    it("iterates asynchronously", function(done) {
        const arr = [1, 2, 3, 4, 5];
        const result = [];
        asyncForEach(arr, function(value, index, next) {
            result.push(value);
            next();
        }, function() {
            expect(result).to.deep.equal(arr);
            done();
        });
        expect(result).to.not.deep.equal(arr);
    });

    it("iterates over a 0-length array", function(done) {
        const arr = [];
        const result = [];
        asyncForEach(arr, function(value, index, next) {
            result[index] = value;
            next();
        }, function() {
            expect(result).to.be.empty;
            done();
        });
    });

    it("gracefully handles a null or undefined array", function(done) {
        const arr = undefined;
        const result = [];
        asyncForEach(arr, function(value, index, next) {
            result[index] = value;
            next();
        }, function(err) {
            expect(err).to.exist;
            done();
        });

    });
});
