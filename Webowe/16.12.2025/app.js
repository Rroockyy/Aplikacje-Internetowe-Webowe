"use strict";

const subBtn = document.getElementById("sub");
const input = document.getElementById("input");
const output = document.getElementById("output");

subBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    let n = input.value;
    output.innerText = sumN(n);
})

function sumN(n){
    let sumN = 0;
    let out = "";
    for(let i = 1; i <= n; i++){
        out += i + " + ";
        sumN += i;
    }
    return out.slice(0, -2) + "= " + sumN;
}