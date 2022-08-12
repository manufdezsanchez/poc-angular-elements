const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/login-form/runtime.js',
    './dist/login-form/polyfills.js',
    './dist/login-form/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/login-form.js');
})();