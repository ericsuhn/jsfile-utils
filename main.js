var extract = require('./fileScripts');

var fileSize = extract.getFileSize('string.txt');
var fileName = extract.getFileNameWithNoPath('string.txt');
var mdHash = extract.getMd5('string.txt');
var shaHash = extract.getSha1('string.txt');

console.log(fileName);
console.log(fileSize);
console.log(shaHash);
console.log(mdHash);
