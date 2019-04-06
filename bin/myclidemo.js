#!/usr/bin/env node

// 参考：
// https://www.cnblogs.com/wmhuang/p/7052587.html
// http://www.sohu.com/a/275486462_495695
// https://www.jianshu.com/p/095c968d406f

var Cli = require('./cliexec');
var Clitasks = require('./clitask');
var cli = new Cli();
function run() {
    var argv = process.argv;
    cli.exec(argv);
}
Clitasks(cli);
run();
