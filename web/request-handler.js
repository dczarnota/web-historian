var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httphelpers = require("./http-helpers");
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var url = req.url;

  if(req.method === "GET"){
    statusCode = 200;
    if(archive.paths[url]){
      var idx = archive.paths[url].toString();
      httphelpers.serveAssets(res, idx);
    }
    else if(url === "/www.google.com") {
      var idx = archive.paths.archivedSites + req.url;
      httphelpers.serveAssets(res, idx);
    }
  }
  // archive.isURLArchived(url,function(arr){
  //   var url = req.url.slice(1);
  //   for(var i = 0; i<arr.length; i++){
  //     if(arr[i] === url){
  //       httphelpers.serveAssets(res, url);
  //       return true;
  //     }
  //   }
  // })
  else if(req.method === "POST") {
    var body = '';
    var url;
    req.on('data', function(data){
      console.log("data: " + data);
      body += data;
    });

    req.on('end',function(){
      url = body.slice(4);
      console.log("this is the url: " +url);
      return url;
    });
   archive.readListOfUrls(url, function(listData){
      for(var i = 0; i < listData.length; i++){
        if(listData[i] === url){
          httphelpers.serveAssets(res, url);
        }
      }
      archive.addUrlToList(url);
      statusCode = 302;
    });
  } else {
    archive.isUrlInList(url);
    statusCode = 404;
  }
  // statusCode = statusCode || 404;
};
/*else if(url){
  if(archive.isURLArchived(url)){
    var idx = archive.paths.archivedSites + url;
    httphelpers.serveAssets(res, idx);
  }
  else{
    if(archive.isUrlInList()){
      //get url
    }
    else{
      archive.addUrltoList(url)

    }
  }
}


// else if(req.url === "/www.google.com"){
//   var idx = archive.paths.archivedSites + req.url;
//   httphelpers.serveAssets(res, idx);
// }




   // fs.readFile(idx, function(err, data){
   //    if(err){
   //      throw err;
   //    }
   //   res.writeHead(statusCode, httphelpers.headers);
   //   res.end(data);
   //  });

};
*/
