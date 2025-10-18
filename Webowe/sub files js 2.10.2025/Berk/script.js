"use strict";
import {decToBin, binToDec} from "./utilities.js";
import {isBinaryString, isDecimalString} from "./validate.js";

addEventListener("submit", function(){
    this.event.preventDefault();

    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const binToDecRadio = document.getElementById("binToDec");
    const decToBinRadio = document.getElementById("decToBin");
    if(binToDecRadio.checked){
        if(isBinaryString(input)){
            output.innerText = input + " → " + binToDec(input);
        }
        else{
            output.innerText = "When converting to decimal input only 0 and 1";
        }
    }
    else{
        if(isDecimalString(input)){
            output.innerText = input + " → " + decToBin(input);
        }
        else{
            output.innerText = "When converting to binary input only 0-9";
        }
    }
})

addEventListener("reset", function(){
    document.getElementById("output").innerText = "Result";
    binToDecChecked();
})

radio.addEventListener("click", function(){
    if(document.getElementById("binToDec").checked){
        binToDecChecked();
    }
    else{
        decToBinChecked();
    }
})

function binToDecChecked(){
    document.getElementById("inputLabel").innerText = "Number in Binary: ";
    document.getElementById("input").placeholder = "ex. 1101";
}

function decToBinChecked(){
    document.getElementById("inputLabel").innerText = "Number in Decimal: ";
    document.getElementById("input").placeholder = "ex. 13";
}

// console.log(isBinaryString(1101));
// console.log(isBinaryString(1111));
// console.log(isBinaryString(123));

// console.log(isDecimalString(1234));
// console.log(isDecimalString("abdc"));
// console.log(isDecimalString(1101));