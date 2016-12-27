# cowsay-tag [![Build Status](https://travis-ci.org/jlmitch5/cowsay-tag.svg?branch=master)](https://travis-ci.org/jlmitch5/cowsay-tag)

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

## Thanks

Thanks to Krasimir Tsonev (krasimir) for his [project](https://github.com/krasimir/webpack-library-starter) which bootstrapped the build process for the library, and thanks to
Nicholas C. Zakas for his book [Understanding ECMAScript 6](https://www.nostarch.com/ecmascript6) which provided the inspiration for the project.

Thanks to Dr. Axel Rauschmayer for his [article](http://www.2ality.com/2016/11/computing-tag-functions.html) on computing tag functions.  His ideas were super helpful in figuring how to support both `cowsay` and `cowsay("custom")`.
