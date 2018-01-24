describe("Includes", function()
{
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    Interval(1,12);
    var intervalle2 = {start : 4, end : 6};
        it("should returns true when intervalle2 is in intervalle1", function () {
            var result = Interval.prototype.includes(intervalle2);
            expect(result).toBeTruthy();
=======
=======
>>>>>>> Stashed changes
    var intervalle1 = new Interval(1,12);
    var intervalle2 = new Interval(4,6);
        it("should returns true when intervalle2 is in intervalle1", function () {
            var result = intervalle1.includes(intervalle2);
            expect(result).toBe(true);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        });
})