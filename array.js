let arr = [1,2,3,4];//best practice
let arr2 = Array(1, 2, 3, 4);

console.log(arr);
console.log(arr2);

console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);

arr[0] = 10;
arr[3] = 7;

console.log(arr);

arr[4] = 6;
arr[5] = 8;

console.log(arr);

console.log(arr[arr.length - 1]);

arr[arr.length] = 67;

console.log(arr);

arr.push(45);

console.log(arr);

arr.shift();

console.log(arr);

arr.unshift(52);

console.log(arr);

let name = "Ain";

console.log(name.split("i"));

let result = arr.map((item) => {
    return item * 2;
});

console.log(result);

const hobbies = ["playing pvz", "playing chess"];

hobbies[0] = "playing racket";

console.log(hobbies);

for (let item of arr){
    console.log(item);
}
