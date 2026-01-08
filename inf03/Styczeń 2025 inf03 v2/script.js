"use strict";

function price(){
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;
    let price, type = 0;

    if(document.getElementById("laminowane").checked){
        type = 1;
    }else if(document.getElementById("winylowe").checked){
        type = 2;
    }else if(document.getElementById("deska").checked){
        type = 3;
    }else{
        alert("Wprowadź poprawne dane.")
    }

    if(width !== "" && length !== ""){
        if (type === 1) price = 12*(width*length)
        if (type === 2) price = 14*(width*length)
        if (type === 3) price = 18*(width*length)

        document.getElementById("output").innerText = "Pole powierzchni pomieszczenia: " + width*length + ", koszt montażu " + price;
    }else{
        alert("Wprowadź poprawne dane.")
    }
}