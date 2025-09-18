/* examples of named exports,
these will be imported and used with the same name in index.js */
export const PI = 3.14;
export const C =  3e9; // 3 X 10^9

/* below 3 objects will be exported using the export keyword */
const authorInfo = {
    firstName: "Shrivatsa",
    lastName: "Shetty",
    address: "Bangalore",
    profession: "Software Engineer",
    dob: new Date("2001-02-21"),
}

const sayNamaste = () => {
    console.log("Namaste Bharath!!!");
}

const sayHello = () => {
    console.log("Hello World!!!");
}

// we will set this as defalut export
const authorName = "Shrivatsa Shetty";

/* setting an default export, 
a single JS file can have only one default export */
export default authorName;

/* exporting all the variables at once */
export {sayHello, sayNamaste, authorInfo}
