var fileScripts = require('./fileScripts');

var fileSize = fileScripts.getFileSize('string.txt');
var fileName = fileScripts.getFileNameWithNoPath('string.txt');
var mdHash = fileScripts.getMd5('string.txt');
var shaHash = fileScripts.getSha1('string.txt');

console.log(fileName);
console.log(fileSize);
console.log(shaHash);
console.log(mdHash);
