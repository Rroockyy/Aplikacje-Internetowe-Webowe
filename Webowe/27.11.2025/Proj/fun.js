"use strict";

function createArr(count, min, max){
    if(count > max-min+1){
        return null;
    }
    let arr = [];
    for(let i = 0; i < count; i++){
        arr[i] = Math.ceil((Math.random()*max)+min);
        for(let j = 0; j < count; j++){
            if(i === j) continue;
            if(arr[i] === arr[j]){
                i--;
                break;
            }
        }
    }
    return arr;
}

function bubbleSort(arr, count){
    let pom;
    for(let i = 1; i < count; i++){
        for(let j = 0; j < count - i; j++){
            if(arr[j] > arr[j+1]){
                pom = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = pom;
            }
        }
    }
    return arr;
}

export {createArr, bubbleSort};