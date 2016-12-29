# cowsay-tag [![Build Status](https://travis-ci.org/jlmitch5/cowsay-tag.svg?branch=master)](https://travis-ci.org/jlmitch5/cowsay-tag) [![npm version](https://badge.fury.io/js/cowsay-tag.svg)](https://badge.fury.io/js/cowsay-tag)

es6 template-tag function for cowsay

## Usage

```
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
    \   ^__^
     \  (oo)_______
        (__)       )/\
            ||----w |
            ||     ||
```

### Custom cows

You can use a custom cow defined in the src/cows.js file:

```
cowsay('snake')`Just type cowsay before your
template string, and the
cow will ssssay it!`;
```

outputs

```
 ______________________________
/ Just type cowsay before your \
| template string, and the     |
\ cow will ssssay it!          /
 ------------------------------
   \       /^\/^\
    \    _|__|  O|
\/     /~     \_/ \
 \____|__________/  \
        \_______      \
                `\     \                 \
                  |     |                  \
                 /      /                    \
                /     /                       \\
              /      /                         \ \
             /     /                            \  \
           /     /             _----_            \   \
          /     /           _-~      ~-_         |   |
         (      (        _-~    _--_    ~-_     _/   |
          \      ~-____-~    _-~    ~-_    ~-_-~    /
            ~-_           _-~          ~-_       _-~
               ~--______-~                ~-___-~

```

You can also define a cow directly as the tag function's param:

```
cowsay(`   \\  I'm
    \\ a
      cow!`)`Just type cowsay before your
template string, and the
"cow" will say it!`;
```

outputs

```
 ______________________________
/ Just type cowsay before your \
| template string, and the     |
\ "cow" will say it!           /
 ------------------------------
   \  I'm
    \ a
      cow!
```

## Including cowsay-tag in your app:

using the UMD module (cowsay-tag.js/`npm install cowsay-tag`):

```
const cowsay = require('cowsay-tag');
// or import cowsay from 'cowsay-tag';

cowsay`This works`;
```

using the script-friendly module (cowsay-tag.min.js):

[see this jsbin!](https://jsbin.com/tisiraqayo/1/edit?html,output)

## Contributing

To contribute, you just need to fork the repo, clone your fork, and `npm install` to install all of the development dependencies (it's recommended to use node v6.x and npm v3.x).

There are three npm scripts that can be used to build cowsay-tag and run tests:
- `npm run build` builds the release bundles (`cowsay-tag.js` and `cowsay-tag.min.js`) to the lib folder once
- `npm run dev` watches for changes to the src directory and rebuilds the release bundles anytime the source changes
- `npm test` watches for changes in the src and test directories, and rebuilds the release bundles, then runs unit tests

Please open a pr to the master branch, so that Travis can run both eslint and unit tests.

Contribution is open to all, and I'm happy to help guide beginner developers through the contribution process.  If you're unsure how to do something but have a cool idea (or just a question about how something works), please open an issue and we can take the conversation from there.

Contribution to the custom cows file (`src/cows.js`) is greatly appreciated!  Please include the source of where you got the ascii art, and please do not strip any identifying marks (such as initials) if they are there.  Offensive cows will not be accepted for inclusion into this library, but you can include those types of things directly in the tag function's param (see above for an example).

## Thanks

Thanks to Krasimir Tsonev (krasimir) for his [project](https://github.com/krasimir/webpack-library-starter) which bootstrapped the build process for the library, and thanks to
Nicholas C. Zakas for his book [Understanding ECMAScript 6](https://www.nostarch.com/ecmascript6) which provided the inspiration for the project.

Thanks to Dr. Axel Rauschmayer for his [article](http://www.2ality.com/2016/11/computing-tag-functions.html) on computing tag functions.  His ideas were super helpful in figuring how to support both `cowsay` and `cowsay("custom")`.
