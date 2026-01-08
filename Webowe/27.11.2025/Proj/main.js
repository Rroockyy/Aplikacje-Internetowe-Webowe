"use strict";

import {createArr, bubbleSort} from "./fun.js"

const output = document.getElementById("out");
const img = document.getElementById("img");

const createBtn = document.getElementById("createBtn");
let count, min, max, arr;

createBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    count = document.getElementById("count").value;
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    arr = createArr(count, min, max);
    console.log(arr);
    

    if(!arr || arr.length === 0) return;

    output.innerText = "Tablica nieposortowana: " + arr.join(", ");
    output.classList.remove("d-none");
    img.classList.add("d-none");
})

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", ()=>{
    output.classList.add("d-none");
    img.classList.remove("d-none");
})

const sortBtn = document.getElementById("sortBtn");

sortBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let arrSorted = [1, 2, 3, 4, 5];
    output.innerHTML += "<br>Tablica posortowana: " + arrSorted.join(", ");
})