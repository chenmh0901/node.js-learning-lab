const paht = require('path');
const fs = require('fs');
function require(filePath) {
  const absolutePath = path.resolve(__dirname, filePath);

  if (caches[absolutePath]) {
    return caches[absolutePath];
  }

  const code = fs.readFileSync(absolutePath).toString();
  let module = {}
  let exports = module.exports = {}
    (function (exports, require, module, __filename, __dirname) {
      const test = {
        name: 'Amumu'
      }

      module.exports = test;
    })(exports, require, module, __filename, __dirname);

  caches[absolutePath] = module.exports;

  return module.exports;
}

module.exports = require;
