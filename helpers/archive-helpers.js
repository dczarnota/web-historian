var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var exports = module.exports = {};
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'lists' : path.join(__dirname, '../archives/sites.txt'),
   '/': path.join(__dirname, '../web/public/index.html')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(url, callback){
//htmlfetcher uses this to read the URL
  // path = this.paths.archivedSites
  var listPath = this.paths.lists;
  fs.readFile(listPath, "utf-8", function(err, rawData){
    if(err){
      throw err;
    }
    var arr = rawData.split('\n');
    arr.forEach(function(item){
      callback(item);
    });
  });
};

exports.isUrlInList = function(url){
  //call readlistofurls
  //does the list contain my url

  // _.contains(this.isUrlInList, url);
};

exports.addUrlToList = function(url, callback){
  //web app adds to sites.txt
  var archivePath = this.paths.lists;
  var url = url + "\n";
  fs.appendFile(archivePath, url, function(err, data){
    console.log("path: "+archivePath);
    if(err){throw err;}
    console.log("addUrltoList url: "+url);
    // callback(data);
  });
// var check = function(){
//   fs.readdir(this.paths.archivedSites, function(err, files){
//     console.log(files);
//   });
};

exports.isURLArchived = function(url,callback){
  var archivePath =  this.paths.archivedSites;
  fs.readdir(archivePath, function(err, arrFiles){
    if(err){
      throw err;
    }
    callback(arrFiles);
        // var arr = rawData.split('\n');
    // callback(arr)
  });
};




// console.log(this.paths.archivedSites)
//   if(this.paths.archivedSites === url ){
//     return
//   };
// });


exports.downloadUrls = function(){

};
