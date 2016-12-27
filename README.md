# cowsay-tag

es6 template-tag function for cowsay

## Usage

```
const cowsay = require('cowsay-tag');
// or `import cowsay from 'cowsay-tag';`

cowsay`Just type cowsay before your
template string, and the
cow will say it!`;
```

outputs

```
 ______________________________
/ Just type cowsay before your \
| template string, and the     |
\ cow will say it!             /
 ------------------------------
  \    ^__^
   \   (oo)_______
      (__)       )/\
        ||----w |
        ||     ||
```

## Thanks

Thanks to Krasimir Tsonev (krasimir) for his [project](https://github.com/krasimir/webpack-library-starter) which bootstrapped the build process for the library, and thanks to
Nicholas C. Zakas for his book [Understanding ECMAScript 6](https://www.nostarch.com/ecmascript6) which provided the inspiration for the project.
