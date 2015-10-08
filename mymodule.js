var fs = require('fs');
var path = require('path');

module.exports = function (directory, extention, callback) {
   files = fs.readdir(directory, function(err, files) {
     if (err) {
       return callback(err);
     }
     files = files.filter(function extFilter(file) {
       return path.extname(file) === '.' + extention;
     });
     callback(null, files);
   });
}
