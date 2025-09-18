const PI = 3.14;
const C =  3e9; // 3 X 10^9

const authorName = "Shrivatsa Shetty";

const autorInfo = {
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

/* exporting multiple modules at once using modules.exports */
module.exports = {
    PI,
    C,
    authorName,
    autorInfo,
    sayHello,
    sayNamaste
}
