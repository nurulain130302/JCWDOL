// soal no 1 
const celcius = 60;

let fahrenheit = (celcius * 9 / 5) + 32;

console.log(`${celcius} derajat celcius = ${fahrenheit} derajat fahrenheit`);


//soal no 2
let num = 25;
if (num % 2 === 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}

// soal no 3
let Num = 7;
let isPrime = true;
  for(let i = 2; i <= num; i++){ 
    if (num % i == 0 ){
      isPrime = false;
      break;
    }}
  console.log(num, "is prime = ", isPrime);



//soal no 4 

let res2 = 0;
for(let i = 0; i <= 5; i++) {
  res2 = res2 + i;//0
}

console.log(res2);

//soal no 5 

let res3 = 1;
let start = 10;
for (let i = start; i >= 1; i--) {
  res3 = res3 *i;
}

console.log(res3);



//soal no 6 
function fibonacci(n){
  if (n < 2){
    return n;
  }else{
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
console.log(fibonacci(6));

