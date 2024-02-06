// // /** My First Git Project **/

// // console.log("Hello World");
// // console.log("Welcome to my project");


// let num = 9;

// for (let i = 1; i <= num; i++) { 
//     console.log(`${num} x ${i} = ${num} * ${i}`);
// }

// //palindrome adalah kata yang susunan hurufnya dibalik, lalu dibandingkan dengan kata asalnya akan sama 
// // aries --> seira == seira x maka aries bukan palindrome

// let name = "ain";
// let res = ""; //menampung huruf dari belakang

// for(let i = name.length - 1; i >= 0; i--){
//     res = res + name[i]
// }

// console.log(res);

// let resName = "";
// let firstname = "Nurul";
// let lastname = "Ain";

// resName = firstname + " " + lastname;

// console.log(resName);


// let numKm = 1;//pembagi
// let numCm = 1000;//pembagi
// let number = 100_000; //cm
// let satuan = "cm";

// if (satuan == "cm"){
//     number = number / numCm + "km";
// }
// if(satuan == "km"){
//     number = number / numKm + "cm";
// }
// console.log(number);


// let numRp = 1000.00;//pembagi
// let numidr = 1000;//pembagi
// let number1 = 1000; //cm
// let rp = "Rp";

// if (satuan == "cm"){
//     number = "Rp" + number1 / numidr ;
// }
// if(satuan == "km"){
//     number = "Rp" + number1 / numRp;
// }
// console.log(number1);

// let result = "";
// let string1 = "Hello World";
// let search1 = "ell";

// hasil = string1 - search1;

// console.log(hasil);

let number2 = String (10000000);
let counter = 1;
let reverseRes = "";
let finalResult = "";

for (let i = number2.length - 1; i >= 0; i--){
    if (counter % 3 === 0 && counter != number2.length){
        reverseRes += number2[i] + ".";
    } else {
    reverseRes += number2[i];
}
counter++;
}
console.log(reverseRes);

for (let j = reverseRes.length - 1; j >= 0; j--){
    finalResult += reverseRes[j];
}

console.log("Rp. " + finalResult);


let number22 = String (10000);
let counter1 = 1;
let reverseRes1 = "";
let finalResult1 = "";

for (let i = number22.length - 1; i >= 0; i--){
    if (counter1 % 3 === 0 && counter1 != number22.length){
        reverseRes1 += number22[i] + ".";
    } else {
    reverseRes1 += number22[i];
}
counter1++;
}
console.log(reverseRes1);

for (let j = reverseRes1.length - 1; j >= 0; j--){
    finalResult1 += reverseRes1[j];
}

console.log("Rp. " + finalResult1);