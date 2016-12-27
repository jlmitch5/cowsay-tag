'use strict';

export default function cowsay(strings, ...values) {
    const raw = strings.reduce((acc, val, i) => {
        acc += val;
        if (values[i]) {
            acc += values[i];
        }

        return acc;
    }, '');

    const lineArr = raw.split('\n');

    const maxLineLength = Math.max(...lineArr.map(v => v.length));

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

    const startLine = ` ${'_'.repeat(maxLineLength + 2)}`;
    const endLine = ` ${'-'.repeat(maxLineLength + 2)}`;

    const cow = `    \\   ^__^
     \\  (oo)\_______
        (__)\       )\/\\
            ||----w |
            ||     ||`;

    return []
        .concat(startLine)
        .concat(text)
        .concat(endLine)
        .concat(cow)
        .join('\n');
}
