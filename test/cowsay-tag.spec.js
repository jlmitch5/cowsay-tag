'use strict';

import chai from 'chai';

chai.expect();

const expect = chai.expect;

import cowsayDev from '../lib/cowsay-tag';
import cowsayProd from '../lib/cowsay-tag.min';

function DevProdDiscrepancyException(context) {
   this.message = `context: ${context}`;
   this.name = 'DevProdDiscrepancyException';
}

// this calls both the dev and prod versions of the cowsay tag function to
// make sure they both return the same thing for each test
const cowsay = function(...args) {

    const fromDev = cowsayDev.apply(this, args);
    const fromProd = cowsayProd.apply(this, args);
    const throwException = function(a, b) {
        throw new DevProdDiscrepancyException(`${a} !== ${b}`);
    };

    let returnVal;


    if (typeof fromDev !== "function" && fromDev !== fromProd) {
        throwException(fromDev, fromProd);
    } else if (typeof fromDev === "function") {
        // for the cowsay('custom')`foo` case, cowsay will return
        // a function that will need to be called again to return
        // the actual cowsay value
        returnVal = function(...args) {
            const fromDevPrime = fromDev.apply(this, args);
            const fromProdPrime = fromProd.apply(this, args);

            if (fromDevPrime !== fromProdPrime) {
                throwException(fromDevPrime, fromProdPrime);
            }

            return fromDevPrime;
        };
    } else {
        returnVal = fromDev;
    }

    return returnVal;
};


import cows from '../src/cows';

describe('Cowsay tag conversion', function() {
    it('should return cowsay version of 1 line string', function() {
        const cowsayFoo = cowsay`Foo`;
        const expected = ` _____
< Foo >
 -----
    \\   ^__^
     \\  (oo)_______
        (__)       )/\\
            ||----w |
            ||     ||`;

        expect(cowsayFoo).to.be.equal(expected);
    });

    it('should return cowsay version of 2 line string', function() {
        const cowsayFoo = cowsay`Foo foo foo
bar`;
        const expected = ` _____________
/ Foo foo foo \\
\\ bar         /
 -------------
    \\   ^__^
     \\  (oo)_______
        (__)       )/\\
            ||----w |
            ||     ||`;

        expect(cowsayFoo).to.be.equal(expected);
    });

    it('should return cowsay version of 3 line string', function() {
        const cowsayFoo = cowsay`Foo foo foo
bar
baz baz`;
        const expected = ` _____________
/ Foo foo foo \\
| bar         |
\\ baz baz     /
 -------------
    \\   ^__^
     \\  (oo)_______
        (__)       )/\\
            ||----w |
            ||     ||`;

        expect(cowsayFoo).to.be.equal(expected);
    });
});

describe('custom cowsay functionality', function() {
    it('should use runtime-defined custom cow BAE for conversion',
        function() {
            const cowsayFoo = cowsay("BAE")`Foo`;
            const expected = ` _____
< Foo >
 -----
BAE`;

            expect(cowsayFoo).to.be.equal(expected);
    });

    describe('use pre-defined custom cows', function() {
        Object.keys(cows).forEach(cow => {
            it(`should use cow: ${cow}`, function() {
                const cowsayFoo = cowsay(cow)`Foo`;
                const expected = ` _____
< Foo >
 -----
${cows[cow]}`;

                expect(cowsayFoo).to.be.equal(expected);
            });
        });
    });
});

describe('var interpretation check', function() {
    it('should interpret vars for default cow say', function() {
        const a = 'aaa';
        const b = `bbb`;
        const cee = `cee!`;
        const c = `cc${cee}`;

        const cowsayFoo = cowsay`${a} ${b} Foo ${c}`;
        const expected = ` ____________________
< aaa bbb Foo cccee! >
 --------------------
    \\   ^__^
     \\  (oo)_______
        (__)       )/\\
            ||----w |
            ||     ||`;

        expect(cowsayFoo).to.be.equal(expected);
    });

    it('should interpret vars w custom cow BAE', function() {
        const a = 'aaa';
        const b = `bbb`;
        const cee = `cee!`;
        const c = `cc${cee}`;

        const cowsayFoo = cowsay("BAE")`${a} ${b} Foo ${c}`;
        const expected = ` ____________________
< aaa bbb Foo cccee! >
 --------------------
BAE`;

        expect(cowsayFoo).to.be.equal(expected);
    });
});
