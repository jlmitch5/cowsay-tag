'use strict';

import chai from 'chai';

chai.expect();

const expect = chai.expect;

import cowsay from '../lib/cowsay-tag';
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
