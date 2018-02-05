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
    var intervalle4 = new Interval(7,9);
    var tabResultat = [];
    var tabResultat2 = [];
    tabResultat.push(intervalle3);
    console.log(tabResultat);
    it("should returns [[2,8]] when intervalle2 is union with intervalle1", function () {
        var result = intervalle1.union(intervalle2);
        console.log(result);
        expect(result.toString()).toBe(tabResultat.toString());
    });
    tabResultat2.push(intervalle1);
    tabResultat2.push(intervalle4);
    it("should returns [[2,6] , [7,9]] when intervalle2 is union with intervalle1", function () {
        var result = intervalle1.union(intervalle4);
        console.log(result);
        expect(result.toString()).toBe(tabResultat2.toString());
    });
})

// Intersection
describe("Intersection", function ()
{
    var intervalle1 = new Interval(2,6);
    var intervalle2 = new Interval(4,8);
    var intervalle3 = new Interval(4,6);
    var intervalle4 = new Interval(7,9);
    var tabResultat = [];
    var tabResultat2 = [];
    tabResultat.push(intervalle3);
    console.log(tabResultat);
    it("should returns [[4,6]] when intervalle2 is intersection with intervalle1", function () {
        var result = intervalle1.intersection(intervalle2);
        console.log(result);
        expect(result.toString()).toBe(tabResultat.toString());
    });
    tabResultat2.push(intervalle1);
    tabResultat2.push(intervalle4);
    it("should returns raise an exception when intervalle2 is intersection with intervalle1", function () {
        var f = function ()
        {
            intervalle1.intersection(intervalle4);
        }
        expect(f).toThrow('No intersection');
    });
})

// Exclusion
describe("Exclusion", function ()
{
    var intervalle1 = new Interval(2,6);
    var intervalle2 = new Interval(4,8);
    var intervalle3 = new Interval(2,4);
    var intervalle4 = new Interval(7,9);
    var tabResultat = [];
    var tabResultat2 = [];
    tabResultat.push(intervalle3);
    console.log(tabResultat);
    it("should returns [[2,4]] when intervalle1 is exclusion with intervalle2", function () {
        var result = intervalle1.exclusion(intervalle2);
        console.log(result);
        expect(result.toString()).toBe(tabResultat.toString());
    });
    tabResultat2.push(intervalle1);
    it("should returns [[2,6]] when intervalle1 is exclusion with intervalle2", function () {
        var result = intervalle1.exclusion(intervalle4);
        console.log(result);
        expect(result.toString()).toBe(tabResultat2.toString());
    });
})