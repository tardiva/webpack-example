require('../styles/index.scss');

console.log('webpack starterkit');

require.ensure([
  "./foo"
], function(require) {
  require("./foo");
}, "foo_chunk");