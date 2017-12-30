var assert = require('assert');
var extract = require('./fileScripts.js');

test('file size of an empty string should be 0', () => {
  expect(extract.getFileSize('')).toBe(0);
});

test('file size of an string.txt should be 43', () => {
  expect(extract.getFileSize('string.txt')).toBe(43);
});

test('file name with no path of "./abc/123/hello" should be "hello" ', () => {
  expect(extract.getFileNameWithNoPath('./abc/123/hello.txt')).toBe('hello.txt');
});

test('md5 of the file string.txt should match" ', () => {
  expect(extract.getSha1('string.txt')).toBe('2fd4e1c67a2d28fced849ee1bb76e7391b93eb12');
});

test('sha1 of the file string.txt should match" ', () => {
  expect(extract.getMd5('string.txt')).toBe('9e107d9d372bb6826bd81d3542a419d6');
});
