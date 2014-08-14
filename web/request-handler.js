var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httphelpers = require("./http-helpers");
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var url = req.url;
  if(req.method === "GET"){
    statusCode = 200;
  }

  if(archive.paths[url]){
    var idx = archive.paths[url].toString();
    httphelpers.serveAssets(res, idx);
  }
  else{
   archive.readListOfUrls(url, function(listData){
    var url = req.url.slice(1);
    // console.log("URL: "+url)
    // console.log(listData)

      for(var i = 0; i < listData.length; i++){
        console.log("listData: "+listData);
        if(listData[i] === url){
          console.log("URL in for loop: "+url);
          httphelpers.serveAssets(res, listData[i]);
          return true;

         //if url is in sites.txt
        }
      }
      //add url to list

     //if url is not in sites.txt
    });
  }


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
