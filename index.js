var postcss = require('postcss');

module.exports = function(options, jade) {

  var filter = function(contents) {
    return postcss(options.plugins).process(contents).css;
  };

  if (jade) {
    jade.filters.postcss = filter;
    return jade;
  } else {
    return filter;
  }
};
