const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// gets the file data(ex. string data)
function getFileData(file){
  return fs.readFileSync(path.join(__dirname, file), 'utf8');
}

// return file size in bytes
// For example, given a path like "/home/kim/mydata.txt", return 129 (e.g., the file is 129 bytes on disk)
function getFileSize(file) {
  return fs.statSync(path.join(__dirname, file)).size;
}

// returns file name /w no path
// for example: given a path like "/home/kim/mydata.txt", return "mydata.txt"
function getFileNameWithNoPath(file) {
  return path.basename(file);
}

// return md5 encryption
// For example, given a path like "/home/kim/mydata.txt", 
// which contains the text The quick brown fox jumps over the lazy dog, return 9e107d9d372bb6826bd81d3542a419d6
function getMd5(file) {
  var secret = getFileData(file);
  return crypto.createHash('md5', secret).update(secret).digest('hex');
}

// return sha1 encryption
// For example, given a path like "/home/kim/mydata.txt", 
// which contains the text The quick brown fox jumps over the lazy dog, return 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
function getSha1(file) {
  var secret = getFileData(file);
  return crypto.createHash('sha1').update(secret).digest('hex');
}

exports.getFileSize = getFileSize;
exports.getFileNameWithNoPath = getFileNameWithNoPath;
exports.getMd5 = getMd5;
exports.getSha1 = getSha1;