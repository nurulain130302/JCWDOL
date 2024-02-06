function sequareArea(s){
    return s * s;
}

function formatCurrency(input) {
    let number = String(input);
    let counter = 1;
    let reverseRes = "";
    let finalResult = "";

    for (let i = number.length - 1; i >= 0; i--){
        if (counter % 3 === 0 && counter != number.length){
        reverseRes += number[i] + ".";
    } else {
    reverseRes += number[i];
}
counter++;
}

for (let j = reverseRes.length - 1; j >= 0; j--){
    finalResult += reverseRes[j];
}

return "Rp. " + finalResult;

}

const cube = function(s){
    return s * s * s ;
}; 

function balok(p, l, t = 5){
    return p * l * t;
}


let greeting1 = "morning";
function hello(){
    console.log("hello");
    console.log("good " + greeting1);
}

console.log("good " + greeting1);

function myFunc(a,b, ...resParams){
    console.log(a);
    console.log(b);
    console.log(...resParams);
    console.log(resParams);
}
// formatCurrency(10000);
// formatCurrency(123456);

const result1 = sequareArea(6);
const result2 = formatCurrency(100000);

console.log(result1);
console.log(sequareArea(6));
console.log(result2);

console.log(cube(5))

// console.log(sequareArea(5));

// f(x) = 2x + 6, dimana x = 7, maka f(x) adalah 20.
hello();

console.log(balok(5, 2, 3));//argumen
console.log(balok(52, 41, 10));

console.log("ain".split(""));

console.log([1,2,3,4].find(function(item){
    return item == 3
}));

console.log(balok(34, 10));
console.log(balok(34, 10, 10));
// jika ada keyword() itu adalah nama function

console.log("a", "b", "c", "d");
console.log("a", "b", "c", "d", "a", "b", "c", "d");

myFunc(1,2);
myFunc(1,2,3,4,5);

function getMessage(firstname){
    function sayHello(){
        return "Hello " +firstname + ".";
    }

    function welcomeMessage(){
        return "Welcome to Purwadhika";
    }

    return sayHello() + " " + welcomeMessage();
}

function greeting(name){
    const defaultMessage = "hello";

    return function(){
        return defaultMessage + name;
    };
}

const message = getMessage("Ain");
console.log(message);

// const greetingAin = greeting("Ain")
// console.log(greetingAin());

const greetingAin = greeting("Ain");

console.log(greetingAin());

function multiplier(factor, number){
    return number * factor;
}

console.log(multiplier(5, 3));
console.log(multiplier(10, 3));

function multiplier2(factor){
    return function(number){
        return number * factor;
    };
}

console.log(multiplier2(5)(3));

function balok2(p){
    return function(t){
        return function(l){
            return p * l * t;
        };
    };
}

console.log(multiplier(5, 3));
console.log(balok2(10)(8)(5));

// function countDown(fromNumber){
//     console.log(fromNumber)

//     let nextNumber = fromNumber;

//     if(nextNumber > 0){
//         countDown(nextNumber);
//     }
// }

function factorial(num){
    if(num > 1){
        //2 * fn(1)
        return num * factorial(num - 1);
    } else{
        return num * 1;
    }
}

const balok3 = (p, l, t) => {
    return p* l * t;
}

function Person(){
    function constructor() {
        console.log("hello person ");
    }
}

const Person2 = () => {
    this.name = "Rio";
    console.log(this.name);
    // console.log(this);
};

const Person3 = () => "Rian"; // Rian sebagai return 
const Balok4 = (p) => (l) => (t)=> p * l * t;


// countDown(5);

console.log(factorial(2));
console.log(factorial(5));

console.log(balok3(4, 3, 2));

Person();
Person2();
console.log(Person3());
console.log(Balok4(10)(7)(5));

var myName = "Ain";
myName.Prototype.hello() = function (){
    console.log("Hello => ".this);
};

myName.hello();


let name = "Ain";
hello();
function hello(){
    console.log("Hello " + name);
}

const hello2 = () => {
    console.log("Hello 2 " + name);
}
hello2();

console.log(isFinite(2), isFinite(Infinity));
console.log(isNaN(85), isNaN("tes"));

console.log(String([1,2,3]));


//exercise4

function trianglePattern(height){ 
    let counter = 1;
    //looping jumlah baris
    for(let i = 1; i <= height; i++){
        let row = "";
        //looping jumlah item based on baris keberapa
        for(let j = 1; j <= i; j++){
            row += (counter < 10 ? "0" : "") + counter + " ";
            counter++;  
        }

        console.log(row);
    }
}

trianglePattern(4);
// trianglePattern(10);


/*
    tinggi = 4
    per baris, adalah jumlah perulangan item / sama dengan jumlah item
    item nya selalu meningkat dari jumlah item sebelumnya per baris
    1 -> 1
    2 -> 3
    3 -> 6
    4 -> 10
    5 -> 15
    6 -> 21
*/