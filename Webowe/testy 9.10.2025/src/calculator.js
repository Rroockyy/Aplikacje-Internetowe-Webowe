"use strict";

function add(a, b){
    let res = a + b;
    return Number(res.toFixed(2));
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

export {add, sub, mul, div};