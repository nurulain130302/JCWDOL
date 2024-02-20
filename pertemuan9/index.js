//nilai / value
function binarySearch(arr, left, right, middle){
    if (right >= left ){
        //          0                 10  - 0   / 2
        let mid = left + Math.floor((right - left) / 2) //5
        if (arr[mid] == middle){
            return mid; //index position
        }

        if (arr[mid] > middle){
            return binarySearch(arr, left, mid - 1, middle);
        } else{
            return binarySearch(arr, mid + 1, right, middle);
        }
    }
    return -1;
}

//needle --> jarum, haystack --> jerami

let arr = [2,3,4,10,40];
let middle = 10;

console.log(binarySearch(arr, 0, arr.length - 1, middle));

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,3,8,4,6]));

function selectionSort(arr){
    //menguraikan isi dari array
    for(let i = 0; i < arr.length; i++){
        let minPosition = i;
        //untuk mencari nilai terkecil di setiap loop pertama
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[minPosition]){
                minPosition = j;
            }
        }
        //swipe position
        if(arr[i] != arr[minPosition]){
            let temp = arr[i];
            arr[i] = arr[minPosition];
            arr[minPosition] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([29,72,98,12,87,66,52,51,36]));