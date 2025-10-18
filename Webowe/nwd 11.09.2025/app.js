"use strict";

const result = document.getElementById("result");
const submit = document.getElementById("submit");

function nwd(a, b){
    while (a !== b){
        if(a > b){
            a -= b;
        }
        else{
            b -= a;
        }
    }

    return a;
}

submit.addEventListener("click", function(event){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    
    event.preventDefault();
    result.innerText = "NWD: " + nwd(a, b);
});