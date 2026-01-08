"use strict";

const addBtn = document.getElementById("add");
const list = document.getElementById("list");
const input = document.getElementById("input");

list.addEventListener("click", ()=>{
    const doneBtn = [...document.querySelectorAll(".done")];

    doneBtn.forEach(el => {
        el.addEventListener("click",()=>{
            el.parentElement.style.textDecoration = "line-through";
        })
    });
})

addBtn.addEventListener("click", ()=>{
    list.innerHTML += "<li>" + input.value + "<button class='done'>Wykonane</button></li>";
})