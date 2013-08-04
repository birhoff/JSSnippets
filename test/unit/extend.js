'use strict';

describe('extend.js', function () {
    var a, b, c;

    beforeEach(function () {
        a = {};
        b = {value: 'B:1'};
        c = {};

        extend(a, b, c);
    });

    it('should verify that a.value === "B:1"', function () {
        assert.strictEqual(a.value, 'B:1');
    });
});
