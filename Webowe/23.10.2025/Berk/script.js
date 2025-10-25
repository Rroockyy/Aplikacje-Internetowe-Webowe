"use strict";

function generateRandomNumbers(min, max, count){
    let arr = [];
    for(let i = 0; i < count; i++){
        let rand = Math.floor(Math.random()*(max - min + 1)) + min;
        arr.push(rand);
        for(let j = 0; j < arr.length - 1; j++){
            if (rand === arr[j]){
                i--;
                arr.pop();
                break;
            }
        }
    }
    return arr;
}
//console.log(generateRandomNumbers(1, 49, 6));

function countMatches(userNums, randomNums){
    let count = 0;
    for(let i = 0; i < userNums.length; i++){
        for(let j = 0; j < randomNums.length; j++){
            if(userNums[i] === randomNums[j]){
                count++;
            }
        }
    }
    
    return count;
}
// console.log(countMatches([1, 2, 3, 4, 5, 6], generateRandomNumbers(1, 49, 6)));
// console.log(countMatches([1, 2, 3, 4, 5, 6], [2, 4, 6, 8, 10, 12]));

const result = document.getElementById("output")

function buildResultHtml(randomNums, matches){
    let list = randomNums.join(", ");
    let out = "";
    out += "<p class='resultTable'>Wylosowane liczby: " + list +"</p>"
    if(matches === 0){
        out += "<p class='resultTable'>Brak trafień!</p>";
    }
    else{
        out += "<p ckass-'resultTable'>Liczba trafień: " + matches + "</p>";
    }
    return out;
}
// console.log(buildResultHtml([1,2,3,4,5,6], 0));
// console.log(buildResultHtml([1,2,3,4,5,6], 2));

function onFormReset(){
    result.innerHTML = "";
}

function displayResult(randomNums, matches){
    result.innerHTML = buildResultHtml(randomNums, matches);
}

// displayResult([1,2,3,4,5,6], 0);
// displayResult([1,2,3,4,5,6], 2);

function getUserInput(){
    let arr = [];
    for(let i = 0; i < 6; i++){
        let test = "in";
        test += i+1;
        let input = document.getElementById(test);
        arr.push(input.value);
    }
    return arr;
}

function onFormSubmit(e){
    e.preventDefault;
    let userIn = [1, 2, 3, 4, 5, 6];
    let randNums = generateRandomNumbers(1, 49, 6);
    let matches = countMatches(userIn, randNums);
    displayResult(randNums, matches);
}

let form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit(form));
form.addEventListener("reset", onFormReset());