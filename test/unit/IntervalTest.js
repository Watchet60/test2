describe("Includes", function()
{
    Interval(1,12);
    var intervalle2 = {start : 4, end : 6};
        it("should returns true when intervalle2 is in intervalle1", function () {
            var result = Interval.prototype.includes(intervalle2);
            expect(result).toBeTruthy();
        });
})