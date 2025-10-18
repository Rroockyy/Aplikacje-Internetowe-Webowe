function binToDec(bin){
    let power = 1, dec = 0;
    for(let i = bin.length - 1; i >= 0; i--){
        if(bin[i] === '1'){
            dec += power;
        }
        power *= 2;
    }

    return dec;
}
// console.log(binToDec("101"));

function decToBin(dec){
    let bin = "";
    while(dec > 0){
        if(dec % 2 === 0){
            bin = '0' + bin;
        }
        else{
            bin = '1' + bin;
        }
        dec = (dec - dec % 2) / 2;
    }

    if(bin === ""){
        bin = "0";
    }
    return bin;
}
// console.log(decToBin(5));

export{binToDec, decToBin};