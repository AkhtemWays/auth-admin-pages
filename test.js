var string = "Stackoverflow is the BEST";
var yyy = "m";
var re = new RegExp(yyy, "i");
var result = string.match(re);

console.log(result === null);
