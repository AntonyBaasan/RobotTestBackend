var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db:'mongodb://127.0.0.1/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db:'mongodb://antony:multivision_passwd@localhost/multivision',
    port: process.env.PORT || 80
  }
}