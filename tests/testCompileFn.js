var jsontemplate = require("../json-template")

exports["test - Simple example"] = function(assert) {
    assert.equal(jsontemplate.compile('Hello {name}')({'name': 'world'}),
                 "Hello world", 'simple')
}

if (module == require.main)
  require('test').run(exports)
