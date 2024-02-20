function findSingle(arr){
    let result = null;
    for(let i = 0; i < arr.length; i++){
        let flag = true;
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] == arr[j]){
                flag = false;
                break;
            }
        }

        if(flag){
            result = arr[i];
            break;
        }
    }

    return result;
}

console.log(findSingle([3,4,3]));
console.log(findSingle([4,1,2,1,2]));