// Funkcje walidacji danych wejściowych

function isBinaryString(s){
    return /^[0-1]+$/.test(s);
}

function isDecimalString(s){
    return /^\d+$/.test(s);
}

// ^ - początek łańcucha
// % - koniec łańcucha
// [0-1] - znak '0' i '1'
// \d - cyfry 0-9
// + - jeden lub więcej wystąpień znaków

// function validateInput(s){
//     while(s[0] == 0){
//         s[0] = '';
//     }
// }

export{isBinaryString, isDecimalString};