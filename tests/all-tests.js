"use strict"

exports['test simple'] = require("./testSimple")
exports['test substitutions'] = require("./testSubstitutions")
exports['test compile function'] = require("./testCompileFn")

if (module == require.main)
  require('test').run(exports)
