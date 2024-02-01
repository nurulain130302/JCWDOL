// /*

// SET panjang EQUALS 10
// SET lebar EQUALS 7

// IF lebar MORE THAN panjang THEN 
//     DISPLAY "lebar tidak boleh lebih besar daripada panjang"
//     EXIT
    
// SET result EQUALS panjang MULTIPLY lebar

// PRINT result 


// ======================

// SET panjang EQUALS 10
// SET lebar EQUALS 6 
// SET tinggi EQUALS 8 

// SET area EQUAL panjang MULTIPLY lebar

// SET volume EQUALS area MULTIPLY tinggi 

// PRINT volume

// */

// let panjang = 10;
// let lebar = 7;

// let result = panjang * lebar;

// console.log(result);

// //============================

// let panjang1 = 10;
// let lebar1 = 6;
// let tinggi = 8;

// let area = panjang1 * lebar1;

// let result1 = area * tinggi;
// console.log(result1);

//==================

// let age = 15;

// if (age >=17){
//     console.log("Now you had ID Card");
// } else{
//     console.log("you are not an adult");
// }

// console.log(21 >= 17);
// console.log(15 >= 17);

// let trafficlampState = "red";

// if(trafficlampState == "red") {
//     console.log("You should stop");
// }else if(trafficlampState == "yellow"){
//     console.log("You should drive slow");
// }else if(trafficlampState == "green"){
//     console.log("You can run");
// }else {
// console.log("traffic Light Invalid");
// }


switch (trafficLampState) {
    case "red":
    console.log("You should stop");
    break;
    case "yellow":
    console.log("You should drive slow");
    break;
    case "green":
    console.log("You can run");
    break;
    default:
    console.log("Trafficlight invalid");
}