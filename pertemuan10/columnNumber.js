function excelSheet(str){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    
    for(let i = 0; i < str.length; i++){
        const findAlpha = alphabet.split("").findIndex(item => str[i] == item) + 1
        result += findAlpha * (26 ** (str.length - i))
        console.log("find alpha => ", findAlpha)
    }
    console.log(result);
    return result;
}

excelSheet("Z");
excelSheet("AA");
excelSheet("AB");
excelSheet("BC");
excelSheet("ZZ");
excelSheet("AAA");
excelSheet("ZZZ");