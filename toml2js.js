#!/usr/bin/env node
'use strict';

var util = require('util');
var fs = require('fs');
var toml = require('toml');
var concat = require('concat-stream');

var readStream;

if (process.argv[2]) {
  readStream = fs.createReadStream(process.argv[2]);
} else {
  readStream = process.stdin;
}

readStream.pause();
readStream.setEncoding('utf8');

readStream.on('error', function(err) {
  console.error(util.inspect(err, {depth:null}));
  process.exit(2);
});

readStream.pipe(concat(function(data) {
  try {
    var parsed = toml.parse(data);
    console.log(JSON.stringify(parsed, null, 2));
  } catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column + ": " + e.message);
    process.exit(1);
  }
}));

readStream.resume();
