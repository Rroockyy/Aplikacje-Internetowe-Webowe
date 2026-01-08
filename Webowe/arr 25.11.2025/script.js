"use strict";

// Tablica
let arr = [2, 7, 4, 1, 3, 5, 6];

// forEach()
arr.forEach((el)=>console.log(el));

// map()
let arrMap = arr.map((el)=>++el);
console.log(arrMap);

// filter()
let arrFilter = arr.filter((el) => el % 2 !== 0);
console.log(arrFilter);

// reduce()
let arrConcat = arr.reduce((a, b) => a + b);
console.log(arrConcat);

// push() / pop()
arr.push(100);
console.log(arr);
arr.pop()

// unshift() / shift()
arr.unshift(10);
console.log(arr);
arr.shift()

// splice()
arr.splice(2, 2);
console.log(arr);

arr = [2, 7, 4, 1, 3, 5, 6];

// join()
console.log(arr.join(" - "));

// slice()
let arrSlice = arr.slice(0, 3);
console.log(arrSlice);

// every()
console.log(arr.every((el) => el % 2 === 0));