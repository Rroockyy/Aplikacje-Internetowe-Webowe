"use strict";

const osoby = [
  { id: 1, imie: "Aleksander", nazwisko: "Bajkowski" },
  { id: 2, imie: "Alicja", nazwisko: "Blach" },
  { id: 3, imie: "Sylwia", nazwisko: "Boryczka" },
  { id: 4, imie: "Iga", nazwisko: "Bujok" },
  { id: 5, imie: "Izabela", nazwisko: "Burda" },
  { id: 6, imie: "Piotr", nazwisko: "Czarkowski" },
  { id: 7, imie: "Oskar", nazwisko: "Faber" },
  { id: 8, imie: "Tomasz", nazwisko: "Fudala" },
  { id: 9, imie: "Grażyna", nazwisko: "Gorczyca" },
  { id: 10, imie: "Adam", nazwisko: "Gross" },
  { id: 11, imie: "Robert", nazwisko: "Janik" },
  { id: 12, imie: "Filip", nazwisko: "Jarzębski" },
  { id: 13, imie: "Bartłomiej", nazwisko: "Jędrzejewski" },
  { id: 14, imie: "Sylwia", nazwisko: "Kalina" },
  { id: 15, imie: "Bartłomiej", nazwisko: "Kozakiewicz" },
  { id: 16, imie: "Igor", nazwisko: "Krawiec" },
  { id: 17, imie: "Krzysztof", nazwisko: "Kulpiński" },
  { id: 18, imie: "Daniel", nazwisko: "Lasoń" },
  { id: 19, imie: "Sławek", nazwisko: "Lewkowicz" },
  { id: 20, imie: "Emil", nazwisko: "Matwiejczuk" },
  { id: 21, imie: "Tomasz", nazwisko: "Polanowski" },
  { id: 22, imie: "Agata", nazwisko: "Pustelnik" },
  { id: 23, imie: "Helena", nazwisko: "Skwara" },
  { id: 24, imie: "Patryk", nazwisko: "Solmian" },
  { id: 25, imie: "Beata", nazwisko: "Spychała" },
  { id: 26, imie: "Lech", nazwisko: "Szołtysek" },
  { id: 27, imie: "Kordian", nazwisko: "Szozda" },
  { id: 28, imie: "Jacek", nazwisko: "Taraszkiewicz" },
  { id: 29, imie: "Grzegorz", nazwisko: "Tchórz" },
  { id: 30, imie: "Cezary", nazwisko: "Tomecki" },
  { id: 31, imie: "Barbara", nazwisko: "Wojda" },
  { id: 32, imie: "Franciszek", nazwisko: "Zabłocki" },
  { id: 33, imie: "Wojciech", nazwisko: "Zienkiewicz" }
];

function generateNamesTable(arr, table){
    for(let i = 0; i < arr.length; i++){
        table.innerHTML += "<tr> <td><center>" + arr[i].id + "</center></td> <td>" + arr[i].nazwisko + "</td> <td>" + arr[i].imie +"</td> </tr>";
    }
}

function generateSantaTable(arr, table){
    for(let i = 0; i < arr.length; i++){
        table.innerHTML += "<tr> <td><center>" + arr[i].nazwisko + " " + arr[i].imie +  "</center></td> <td>" + arr[Number(arr[i].los)-1].nazwisko + " " + arr[Number(arr[i].los)-1].imie + "</td> </tr>";
    }
}

function los(arr){
    loop1:
    for(let i = 0; i < arr.length; i++){
        let rand = Math.floor(Math.random() * arr.length) + 1;
        for(let j = 0; j < i; j++){
            if(Number(arr[j].los) === rand){
                i--;
                continue loop1;
            }
        }
        arr[i]["los"] = rand;
    }
}

const tableNames = document.getElementById("table1");
const tableSanta = document.getElementById("table2");

generateNamesTable(osoby, tableNames);

const gift = document.getElementById("gift");
const box = document.getElementById("box");
gift.addEventListener("click", ()=>{
    box.style.visibility = "hidden";
    tableSanta.style.visibility = "visible";
})

los(osoby);
generateSantaTable(osoby, tableSanta);