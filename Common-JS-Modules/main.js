/* extracting the specific variables from the modules using object destructuring */
const {C, PI} = require("./utils");

console.log("PI:", PI);
console.log("c:", C);

/* some variabels like __dirname, __filename the the object module
along with the function export and require are auto imported by Node.js 
and hence we can use them directly */
console.log("Current Directory:\n", __dirname);
console.log("Current File:\n", __filename);


