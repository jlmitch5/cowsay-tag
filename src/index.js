'use strict';

import cows from './cows';

// creates text bubble text
const getTextBubble = function (strings, ...values) {
    // create raw string from text pieces and var substitutions
    const raw = strings.reduce((acc, val, i) => {
        acc += val;
        if (values[i]) {
            acc += values[i];
        }

        return acc;
    }, '');

    const lineArr = raw.split('\n');

    // find the length of the longest line
    const maxLineLength = Math.max(...lineArr.map(v => v.length));

    // transform each line with bound chars and proper padding
    // based on longest line
    const text = lineArr.map((l, i) => {
        function getBoundChar(bound, numLines, index) {
            let boundChar;

            if (numLines === 1) {
                boundChar = (bound === 'start') ? '<' : '>';
            } else {
                if (index === 0) {
                    boundChar = (bound === 'start') ? '/' : '\\';
                } else if (numLines - 1 === index) {
                    boundChar = (bound === 'start') ? '\\' : '/';
                } else {
                    boundChar = '|';
                }
            }

            return boundChar;
        }

        const startChar = getBoundChar('start', lineArr.length, i);
        const endChar = getBoundChar('end', lineArr.length, i);

        return `${startChar} ${l}${' '
            .repeat(maxLineLength - l.length)} ${endChar}`;
    });

    // make underscore and dash top and bottom text-bubble boundaries
    const startLine = ` ${'_'.repeat(maxLineLength + 2)}`;
    const endLine = ` ${'-'.repeat(maxLineLength + 2)}`;

    return []
        .concat(startLine)
        .concat(text)
        .concat(endLine)
        .join('\n');
};

// function the library exposes for use
export default function cowsay(cow, ...args) {
    // combines cow and text bubble and returns string
    const getCowSay = function (cow, ...args) {
        const textBubble = getTextBubble(...args);

        return []
            .concat(textBubble)
            .concat(cow)
            .join('\n');
    };

    // support the default form cowsay`foo`
    if (Array.isArray(cow)) {
        const newArgs = [cow].concat(args || []);

        cow = `    \\   ^__^
     \\  (oo)\_______
        (__)\       )\/\\
            ||----w |
            ||     ||`;

        return getCowSay(cow, ...newArgs);
    }

    // support the form cowsay('customCow')`foo`
    // lots of help from:
    // http://www.2ality.com/2016/11/computing-tag-functions.html
    // thanks, Dr. Axel Rauschmayer!
    return function (...args) {
        // look to see if the cow is in the cows object
        if (cows[cow] !== undefined) {
            cow = cows[cow];
        }

        return getCowSay(cow, ...args);
    };
}
