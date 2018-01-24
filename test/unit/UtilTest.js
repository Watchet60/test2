// Factorial

describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

// Arrangement

describe("Arrangement", function(){
    var testCases = [
        {
            n : 0,
            r : 0,
            arrangement : 1
        },
        {
            n : 5,
            r : 2,
            arrangement : 20
        },
        {
            n : 9,
            r : 4,
            arrangement : 3024
        },
        {
            n : 8,
            r : 7,
            arrangement : 40320
        },
        {
            n : 4,
            r : 4,
            arrangement : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.arrangement + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n,testCase.r);
            expect(result).toEqual(testCase.arrangement);
        })
    });


    it("should raise an exception when n < r", function(){
        var f = function(){
            Util.arrangement(5,9);
        }
        expect(f).toThrow('r can\'t be greater than n');
    });

    it("should raise an exception when n or r is not an integer", function(){
        var f = function(){
            Util.arrangement('test','test');
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    })

    it("should raise an exception for n > 20", function(){
        var f = function(){
            Util.arrangement(28,22);
        }
        expect(f).toThrow('Unable to compute arrangement for n > 20');
    })
});

// Combination

describe("Combination", function(){
    var testCases = [
        {
            n : 0,
            r : 0,
            combination : 1
        },
        {
            n : 5,
            r : 2,
            combination : 10
        },
        {
            n : 9,
            r : 4,
            combination : 126
        },
        {
            n : 8,
            r : 7,
            combination : 8
        },
        {
            n : 13,
            r : 7,
            combination : 1716
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.combination + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.combination(testCase.n,testCase.r);
            expect(result).toEqual(testCase.combination);
        })
    });


    it("should raise an exception when n < r", function(){
        var f = function(){
            Util.combination(5,9);
        }
        expect(f).toThrow('r can\'t be greater than n');
    });

    it("should raise an exception when n or r is not an integer", function(){
        var f = function(){
            Util.combination('test','test');
        }
        expect(f).toThrow('Unable to compute combination of non integer values');
    })

    it("should raise an exception for n > 50", function(){
        var f = function(){
            Util.combination(57,25);
        }
        expect(f).toThrow('Unable to compute combination for n > 50');
    })
});

// IsPrime

describe("IsPrime", function(){
    var testCases = [
        {
            n : 0,
            isPrime : false
        },
        {
            n : 5,
            isPrime : true
        },
        {
            n : 17,
            isPrime : true
        },
        {
            n : 40,
            isPrime : false
        },
        {
            n : 73,
            isPrime : true
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.isPrime + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.isPrime);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.isPrime(-1);
        }
        expect(f).toThrow('Unable to compute isPrime for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.isPrime('test');
        }
        expect(f).toThrow('Unable to compute isPrime of non integer values');
    })
});

// SumPrime

describe("SumPrime", function(){
    var testCases = [
        {
            n : 6,
            sumPrime : 10
        },
        {
            n : 8,
            sumPrime : 17
        },
        {
            n : 10,
            sumPrime : 17
        },
        {
            n : 12,
            sumPrime : 28
        },
        {
            n : 24,
            sumPrime : 100
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.sumPrime + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumPrime);
        })
    });


    it("should raise an exception when n < 2", function(){
        var f = function(){
            Util.sumPrime(1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 2');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.sumPrime('test');
        }
        expect(f).toThrow('Unable to compute sumPrime of non integer values');
    })
});


// FizzBuzz

describe("FizzBuzz", function(){

    var tabExample = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
    it("should returns " + tabExample + " when n = 15", function(){
        var result = Util.fizzBuzz(15);
        expect(result).toEqual(tabExample);
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.fizzBuzz(-1);
        }
        expect(f).toThrow('Unable to compute sumPrime for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.fizzBuzz('test');
        }
        expect(f).toThrow('Unable to compute sumPrime of non integer values');
    })
});


// Cipher

describe("Cipher", function(){

    var phraseExemple = "Maxime";
    var resultatExemple = "Nbyjnf";
    it("should returns " + resultatExemple + " when phrase = " + phraseExemple, function(){
        var result = Util.cipher(phraseExemple);
        expect(result).toEqual(resultatExemple);
    });


    it("should raise an exception when n is not a string", function(){
        var f = function(){
            Util.cipher(4);
        }
        expect(f).toThrow('Unable to compute cipher of string values');
    })

    it("should raise an exception when n is not a string", function(){
        var f = function(){
            Util.cipher("Maxime60170 Nogent");
        }
        expect(f).toThrow('Unable to compute cipher of string values');
    })
});
