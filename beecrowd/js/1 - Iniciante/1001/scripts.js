var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split(" ");

var A = Number.parseInt(lines.shift(), 10);
var B = Number.parseInt(lines.shift(), 10);

var X = A + B;

console.log("X = " + X);