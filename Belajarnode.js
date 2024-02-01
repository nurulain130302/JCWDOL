
// const Length = 10;
// const Width = 5;
// let luas = Length * Width; 
// let keliling = 2 * (Length + Width);
// console.log("Luas Persegi Panjang = ", luas);
// console.log("Keliling Persegi Panjang = ", keliling);


// const radius = 5;
// const pi = ("3.14");
// let diameter = 2 * radius;
// let keliling = 2 * pi * radius;
// let luas = 0.25 * radius ** 2; 
// console.log("diameter lingkaran = ", diameter);
// console.log("keliling lingkaran = ", keliling);
// console.log("luas lingkaran = ", luas);


// const a = 80;
// const b = 65;
// let sudut = 180 - a - b;
// console.log("Sudut segitiga = ", sudut);

let date1 = new Date ("2022-01-20");
let date2 = new Date ("2022-01-22");
let res = date1.getDate() - date2.getDate();

console.log(Math.abs(res));


let days = 400;
let year = Math.floor(days / 365);
let daysYearLeft = days % 365;
let month = Math.floor(daysYearLeft / 30);
let daysMonthLeft = daysYearLeft % 30;

console.log(`${year} year, ${month} month, ${daysMonthLeft} days`);