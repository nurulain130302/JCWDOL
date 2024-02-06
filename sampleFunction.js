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