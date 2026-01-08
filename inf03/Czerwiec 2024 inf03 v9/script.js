"use strict";
let currentPhoto = 1;

function next(){
    if(currentPhoto === 7){
        currentPhoto = 0;
    }
    currentPhoto += 1;
    document.getElementById('photo').src = currentPhoto + ".jpg";
}

function previous(){
    if(currentPhoto === 1){
        currentPhoto = 8;
    }
    currentPhoto -= 1;
    document.getElementById('photo').src = currentPhoto + ".jpg";
}