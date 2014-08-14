var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var exports = module.exports = {}
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt'),
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
  path = archive.paths.archivedSites
  path+asset
  var listPath = this.paths['list'];
  // console.log(listPath)
  console.log("this is the listPath: " +listPath)
  fs.readFile(listPath, "utf-8", function(err, rawData){
    if(err){
      throw err;
    }
    var arr = rawData.split('\n');
    // arr.push(data);
    // console.log("arr: "+arr);
    // console.log("isArray? "+ Array.isArray(arr));
    callback(arr);
  });
};

exports.isUrlInList = function(){
  //call readlistofurls
  //does the list contain my url
  //_.contains(list, url)
};

exports.addUrlToList = function(url, callback){
  //web app adds to sites.txt
// };
// var check = function(){
//   fs.readdir(this.paths.archivedSites, function(err, files){
//     console.log(files);
//   });
};

exports.isURLArchived = function(url,callback){
  callback(url);
};




// console.log(this.paths.archivedSites)
//   if(this.paths.archivedSites === url ){
//     return
//   };
// });


exports.downloadUrls = function(){

};
