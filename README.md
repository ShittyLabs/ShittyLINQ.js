# ShittyLINQ.js

_The shitty version of the C# LINQ-to-objects Enumerable extension methods for JavaScript._

[![Bless](https://cdn.rawgit.com/LunaGao/BlessYourCodeTag/master/tags/alpaca.svg)](http://lunagao.github.io/BlessYourCodeTag/) 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/jreina/ShittyLINQ.js.svg?branch=master)](https://travis-ci.org/jreina/ShittyLINQ.js)

## What this is  
A function which, when called, adds a bunch of methods to `Array.prototype` mirroring the [`System.Linq`](https://docs.microsoft.com/en-us/dotnet/csharp/linq/) namespace from C#.

## What this is not
 - Performant
 - [The good version of LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/linq/)

## What's up with the name?  
This project is based on the [ShittyLINQ .NET package](https://github.com/jreina/ShittyLINQ).

## Usage
Run the follwing to install the library:
```bash
npm install shittylinq
```

The library only needs to be imported once. The library exports a single function that needs to be called before the methods can be used. Since the methods are bound to the array prototype, the methods will be available in modules other than where the imported function is called.

```javascript
require('shittylinq')();

[2, 9, 1, 7, 4]
  .Where(x => x % 2 !== 0)
  .Take(2)
  .Aggregate((a, b) => a + b);
// <- 10
```

## Developing
Please read the [contribution guide](CONTRIBUTING.md) before beginning development.

Once the project is cloned, run 
```bash
npm install
```
This will set up Git hooks to run Prettier when a commit is made.

## Running Tests
Tests are run using Mocha. Chai is used as the assertion library.
```bash
npm test
```

## License?
MIT
