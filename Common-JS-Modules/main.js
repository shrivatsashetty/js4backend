/* extracting the specific variables from the modules using object destructuring */
const {C, PI} = require("./utils");

console.log("PI:", PI);
console.log("c:", C);

console.log("Current Directory:\n", __dirname);
console.log("Current File:\n", __filename);


