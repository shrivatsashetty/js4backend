const slugify = require('slugify');

let targetStr = "namaste world && ***)99##3";

let strSlug = slugify(targetStr);

console.log(strSlug); // namaste-world-andand-***)993

