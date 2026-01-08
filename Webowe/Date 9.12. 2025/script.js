"use strict";

const currentDateTime = new Date("2001-09-11 01:20:31 EST");

const year = currentDateTime.getFullYear();
const month = currentDateTime.getMonth()+1;
const date = currentDateTime.getDate();
const hour = currentDateTime.getHours();
const minutes = currentDateTime.getMinutes();
const seconds = currentDateTime.getSeconds();

console.log(year, month, date, hour, minutes, seconds);

const startSchoolYear = new Date("2025-09-01");
const endSchoolYear = new Date("2026-06-24");

console.log(startSchoolYear);
console.log(endSchoolYear);

console.log((endSchoolYear-startSchoolYear)/3600000/24);
