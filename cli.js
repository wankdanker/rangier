#!/usr/bin/env node
const argv = require('yargs').argv;
const ranger = require('./');

if (!argv.range) {
    return console.log('--range is required')
}

if (!argv.template) {
    return console.log('--template is required')
}

//make sure argv.range is an array of ranges
if (!Array.isArray(argv.range)) {
    argv.range = [argv.range];
}

ranger(argv.range, function (range) {
    console.log(eval('`' + argv.template +'`'));
});