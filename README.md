# jsfile-utils <img src="https://travis-ci.org/ericsuhn/jsfile-utils.svg?branch=master">

An open source Node.js library that makes it easy to get various pieces of info about a given file on disk. This library brings together various existing tools, to create a convinient all-in-one file utility library.

## Setup

### Prerequisites
Minimum requirements include:

* [Node Version 6.11.3](https://nodejs.org/en/download/)
* [npm Version 3.10.10](https://www.npmjs.com/get-npm)

### Installation
Clone the jsfile-utils repository

```bash
$git clone https://github.com/ericsuhn/jsfile-utils.git
```

Next make sure you cd into the jsfile-utils directory

```bash
$git cd jsfile-utils
```

and install dependencies

```bash
$git npm install
```

To use this library in your projects, add the following code to your file.

```js
var fileScripts = require('./fileScripts');
```

## Example
Here are examples of how the functions can be called, to get file data. The following example can be seen in the index.js file, by running the file in debugger mode (In Visual Studio Code for example).

```js
var fileScripts = require('./fileScripts');

var fileSize = fileScripts.getFileSize('string.txt');
var fileName = fileScripts.getFileNameWithNoPath('string.txt');
var mdHash = fileScripts.getMd5('string.txt');
var shaHash = fileScripts.getSha1('string.txt');

```

The results can then be output to the console window

```js
console.log(fileName);
console.log(fileSize);
console.log(shaHash);
console.log(mdHash);
```

which outputs:

```
string.txt
43
2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
9e107d9d372bb6826bd81d3542a419d6
```

## Contributing
Please refer to our [Contributing page](CONTRIBUTING.md)

## License

This project is licensed under the [MIT](docs/LICENSE.md) license

## Author
[Eric Suarez](https://esoscode.wordpress.com/)