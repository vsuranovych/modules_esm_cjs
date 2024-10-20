// Make this code work.
// Fix import issues.
// Do not modify function calls.

import _ from 'lodash';

if (_.isNil(undefined)) {
  const cjsNamedExport = require('./cjs-modules/cjs-named-export');
  cjsNamedExport();

  const defaultExport = require('./cjs-modules/cjs-default-export');
  const {
    defaultPlusNamedExport,
  } = require('./cjs-modules/cjs-default-export');

  defaultExport();
  defaultPlusNamedExport();

  const {
    anotherNamedExport,
    anotherNamedExport2,
  } = require('./cjs-modules/another-named-export');

  anotherNamedExport();
  anotherNamedExport2();
}

import('./esm-modules/es6-default.mjs').then(({ default: es6Default }) => {
  es6Default();
});

const { c, d } = require('./esm-modules/es6-named.js');
c();
d();
