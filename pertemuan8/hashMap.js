// let obj = {
//     Ain: '001',
//     Rio: '002',
// };

// console.log(obj);

// console.log(obj.Ain);

const myMap = new Map();

myMap.set("Ain", "001");
myMap.set("Rio", "002");

console.log(myMap.has("Ain"));

for (let[key, value] of myMap){
    console.log(`${key} = ${value}`);
}

