//FIZZ BUZZ
/*
looping by input 
jika angka kelipatan 3, ganti jadi fizz
jika angka kelipatan 5, ganti jadi buzz
jika angka kelipatan 3 dan 5, ganti jadi fizz buzz
jika bukan keduanya, maka tampilkan angka biasa
*/

// function fizzBuzz(input){
//     for(let i = 1; i <= input; i++){
//         // console.log(i);
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("Fizz Buzz");
//         }else if(i % 3 === 0){
//             console.log("Fizz");
//         }else if(i % 5 === 0){
//             console.log("Buzz");
//         } else{
//             console.log(i);
//         }
//     }
// }

// // fizzBuzz(5);
// console.log("=======");

// fizzBuzz(20);

//remove odd number
/*
baca satu - satu item array menggunakan : 


*/

// function removeOddNumber(arr){
//     let result =[];
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0){
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]));


// number 1 session 5

function statisticNumber(arr){
    let max = arr[0];
    let min = arr[0];
    let average = 0;
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }

        total = total + arr[i];
    }

    average = total / arr.length;
    
    return { min : min, max: max, average : average};
}

console.log(statisticNumber([12, 5, 23, 18, 4, 45, 32]));

//no 2 session 5

function arrayToString(arr){
    let result4 = "";

    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1){
        result4 = result4 + "  and " + arr[i];
    } else{
        result4 = result4 + arr[1] + ",";
    }
    console.log(result4);
}
        return result4;
    }

console.log(arrayToString(["apple", "banana", "cherry", "date"]));

//exercise no 3 session 5 
function mergeWord(str){
    let result5 = [];
    let temp = "";
    for (let i = 0; i < str.length; i++){
        temp = temp + str[i];
        if(str[i] == " " || i === str.length - 1){
        result5.push(temp);
        temp = "";
        }
    }

    return result5;
}

console.log(mergeWord("Hello World"));


//no 4 session 5
function sumArray(arr1, arr2){
    if (arr1.length != arr2.length){
        return "invalid array";
    }

    let result6 = []

    for(let i = 0; i < arr1.length; i++){
        let temp2 = arr1[i] + arr2[i];
        result6.push(temp2);
    }

    return result6;
}
console.log(sumArray([2,3,4], [0,9,8]));

//no 5 session 5
function checkArray(arr, newElement){
    let flag = false;
    for(let i = 0; i < arr.length; i++){
        if(newElement == arr[i]){
            flag = true;
            break
        }
    }

    if (flag == false){
        arr.push(newElement);
    }

    return arr;
}

console.log(checkArray([1,2,3,4],8));
console.log(checkArray([1,2,3,4],4));

function maximumCapacity(maxSize, ...arr){
        let result = [];
    for(let i = 1; i <= maxSize; i++){
        result.push(arr[i - 1]);
    }
    return result;
}
console.log(maximumCapacity(5,5,10,24,3,6,7,8));