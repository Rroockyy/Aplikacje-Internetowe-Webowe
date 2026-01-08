"use strict";

const output = document.getElementById("out");
const subBtn = document.getElementById("submit");

subBtn.addEventListener("click", ()=>{
    let first = document.getElementById("firstElement").value;
    let difference = document.getElementById("difference").value;
    let count = document.getElementById("count").value;

    console.log(getArithmeticSequence(first, difference, count));
    output.innerText = getArithmeticSequence(first, difference, count);
})

function getArithmeticSequence(currentNum, difference, count){
    Number(currentNum);
    let arr = [];
    for(let i = 0; i < count; i++){
        arr.push(currentNum);
        currentNum += Number(difference);
    }
    
    return arr;
}