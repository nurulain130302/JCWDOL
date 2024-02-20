const belanja = require("./belanja");
const shopping = belanja.shopping;
const person = require("./person");

shopping(10000000, belanja.priceList[0], (change) => {
        console.log(" money left: ", change);
        console.log(" =============================");
        shopping(change, belanja.priceList[2],(change) => {
            console.log(" money left: ", change);
            console.log(" =============================");
        });
});

const myJson = require("./json");

console.log(myJson.text);

console.log(person);