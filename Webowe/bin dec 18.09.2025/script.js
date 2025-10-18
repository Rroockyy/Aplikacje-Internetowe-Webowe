"use strict";

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

addEventListener("submit", function(){
    this.event.preventDefault();

    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const binToDecRadio = document.getElementById("binToDec");
    const decToBinRadio = document.getElementById("decToBin");
    if(binToDecRadio.checked){
        output.innerText = input + " → " + binToDec(input);
    }
    else{
        output.innerText = input + " → " + decToBin(input);
    }
})

addEventListener("reset", function(){
    document.getElementById("output").innerText = "Result";
    binToDecChecked();
})

function binToDecChecked(){
    document.getElementById("inputLabel").innerText = "Number in Binary: ";
    document.getElementById("input").placeholder = "ex. 1101";
}

function decToBinChecked(){
    document.getElementById("inputLabel").innerText = "Number in Decimal: ";
    document.getElementById("input").placeholder = "ex. 13";
}