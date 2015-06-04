# jade-postcss

This is a simple module which adds a PostCSS filter to jade.

##Installation

    $ npm install jade-postcss

##Usage

```js
var jade = require('jade');
var postcss = require('jade-postcss');

jade.filters.postcss = postcss({ plugins: [require('autoprefixer'), ...]});
```

OR

```js
var jade = require('jade');
var postcss = require('jade-postcss');

jade = postcss({plugins: [require('autoprefixer'), ...]}, jade);
```

Now you can use PostCSS in your jade templates as following.

```jade
style
	:postcss
    .hello {
      h1 {
        color: red;
      }
    }
```
