require('chai').should();

var jade = require('jade');
var jadePostcss = require('..');

describe('compile', function() {
  var expected = '<style>.hello h1 {\n    color: red;\n}</style>';

  it('should be the right compiled output', function() {
    var compiler = jadePostcss({ plugins: [require('postcss-nested')] }, jade);
    var result = compiler.renderFile('./test/jade/test.jade');
    result.should.be.equal(expected);
  });
});
