import path from "path";
import { fileURLToPath } from "url";

const sampleFilePath = "./files/test.txt";
const sampleAbsFilePath = "/home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops/files/test.txt";

console.log("Directory:", path.dirname(sampleFilePath)); // ./files

console.log("Is absolute path:", path.isAbsolute(sampleFilePath)); // false

console.log("Is absolute path:", path.isAbsolute(sampleAbsFilePath)); // true

console.log("Resolved Path:", path.resolve(sampleFilePath)); // /home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops/files/test.txt


console.log("File Extension:", path.extname(sampleFilePath)); // .txt

console.log("File Name:", path.basename(sampleAbsFilePath)); // test.txt

/* the __dirname and the __filename are not available by default
 * in ES6 modules, therfore here's the workaround */

/* get the abs path to the file's parent directory */
const __dirname = import.meta.dirname
console.log(__dirname); // /home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops

/* get the URL to the current file */
const currentFileURL = import.meta.url;
console.log(currentFileURL); // file:///home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops/pathDemo.js

/* get the absolute path to the current file */
const absPathCurrentFile = fileURLToPath(currentFileURL)
console.log(absPathCurrentFile); // /home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops/pathDemo.js


/* join two paths into one, the naming is auto resolved */
console.log(path.join(__dirname, sampleFilePath)); // /home/shrivatsa/Codeplay/JS4Backend/JS-File-Ops/files/test.txt


