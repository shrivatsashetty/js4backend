/* importing user defined module
we can also import a moudle using an alias */
import myName, {PI, C, sayNamaste as namaskara, sayHello, authorInfo} from "./utils.js"

/* importing a node module */
import slugify from "slugify";

console.log("Author Name:", myName);

console.log("PI:", PI);

console.log("C:", C);

console.log("Author Info:\n", authorInfo);

namaskara();

sayHello();

let spacedStr = " S pa ce d & Te xt"
let slug = slugify(spacedStr);

console.log(slug); // S-pa-ce-d-and-Te-xt




