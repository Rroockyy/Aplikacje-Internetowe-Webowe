"use strict";

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

    let out = "";
    for(let i = 0; i < bin.length; i++){
        if((i+(bin.length % 4)) % 4 === 0){
            out += " ";
        }
        out += bin[i];
    }
    return out;
}

function convert(){
    let input = document.getElementById("input").value;
    document.getElementById("output").innerHTML = decToBin(input) + "<sub>(2)</sub>";
}