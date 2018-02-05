// Includes

describe("Includes", function()
{
    var intervalle1 = new Interval(1,12);
    var intervalle2 = new Interval(4,6);
    it("should returns true when intervalle2 is in intervalle1", function () {
        var result = intervalle1.includes(intervalle2);
        expect(result).toBe(true);
    });
})

// Union

describe("Union", function ()
{
    var intervalle1 = new Interval(2,6);
    var intervalle2 = new Interval(4,8);
    var intervalle3 = new Interval(2,8);
    var tabResultat = [];
    tabResultat.push(intervalle3);
    console.log(tabResultat);
    it("should returns [[2,8]] when intervalle2 is union with intervalle1", function () {
        var result = intervalle1.union(intervalle2);
        console.log(result);
        expect(result.toString()).toBe(tabResultat.toString());
    });
})