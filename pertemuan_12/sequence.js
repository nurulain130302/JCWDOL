let result;

function greet(str){
    result = str;
}

function hello(){
    greet("hello");
}

function arigatou(){
    greet("arigatou");
}

arigatou();
console.log("result => ", result);
hello();
console.log("result => ", result);

function calculator(a,b){
    return a+b;
}

function calculator2(a,b){
    let result = a+b;
    displayer(result);
}

function calculator3(a,b, callback){
    if(isNaN(a+b)){
        console.log("not a number");
    } else{
    callback(a + b);
    }
}

function displayer(something){
    console.log(something);
}

let result2 = calculator(5,5);
// let result3 = calculator2(5,5);

// displayer(result2);
//displayer(result3);
calculator3(5,"a",displayer);