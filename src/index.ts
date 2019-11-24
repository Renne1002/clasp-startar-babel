declare var global: any;

const { test1, test2 } = require("./test.js");
const { hoge } = require("./hoge.js");

global.test1 = test1;
global.test2 = test2;
global.hoge = hoge;
