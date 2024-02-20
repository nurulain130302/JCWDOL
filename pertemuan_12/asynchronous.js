// setTimeout(() => {
//     console.log("Asynchronous is easy")
// }, 3000);

console.log(1);
console.log(2);
console.log(3);

//SYNCHRONOUS
/*
1. selesaikakn 1 process untuk mengeksekusi proses selanjutnya(tunggu )
*/

//ASYNCHRONOUS

/*
1. tak perlu menunggu  1 process yang belum selesai
*/

// setTimeout(() => {
//     console.log("process 3 detik selesai");
// },3000);
// setTimeout(() => {
//     console.log("process 1 detik selesai");
// },1000);
// setTimeout(() => {
//     console.log("process 5 detik selesai");
// },5000);

console.log("task 1 done");
setTimeout(() => {
    console.log("task 2");
},5000);
console.log("task 3");