var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
 var httphelpers = require("./http-helpers");
// require more modules/folders here!

exports.handleRequest = function (req, res) {

if(req.method === "GET"){
   statusCode = 200;

  var idx = archive.paths['/'].toString();
   fs.readFile(idx, function(err, data){
      if(err){
        throw err;
      }
     res.writeHead(statusCode, httphelpers.headers);
     res.end(data);
    });
  }

};
