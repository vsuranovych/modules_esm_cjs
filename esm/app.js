// Fix import issues.
// Make all imported functions call properly

import { a, b } from './esm-modules/es6-default.js';
import { test } as c from './esm-modules/es6-named.js';
import { a, b } as {d, e} from './esm-modules/es6-named.js';

a();
b();
c();
d();
e();

import cjs from './cjs-modules/cjs-named-export.js';

cjs.cjsNamedExport();

const jwtEncode = require('jwt-encode');

console.log(jwtEncode('data', 'secret'));
