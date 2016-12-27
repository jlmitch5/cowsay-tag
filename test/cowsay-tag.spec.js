'use strict';

import chai from 'chai';
import cowsay from '../lib/cowsay-tag';

chai.expect();

const expect = chai.expect;

describe('Cowsay tag conversion', () => {
    it('should return cowsay version of 1 line string', () => {
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

    it('should return cowsay version of 2 line string', () => {
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

    it('should return cowsay version of 3 line string', () => {
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
