describe("Includes", function()
{
    Interval.start = 2;
    Interval.end = 9;
    var intervalle2 = {start : 4, end : 6};
        it("should returns true when intervalle2 is in Interval", function () {
            var result = Interval.prototype.includes(intervalle2);
            expect(result).toEqual(true);
        });
})