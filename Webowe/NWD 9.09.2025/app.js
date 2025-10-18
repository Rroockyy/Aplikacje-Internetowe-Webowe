let num1 = prompt("Pierwsza liczba");
let num2 = prompt("Druga liczba");

//Implementacja algorytmu NWD wykorzystujący odejmowanie
function NWDAdd(a, b){
    while(a !== b){
        if(a > b){
            a -= b;
        }
        else{
            b -= a;
        }
    }

    return a;
}

//Implementacja algorytmu NWD wykorzystujący dzielenie
function NWDDevide(a, b){
    let r = 0;
    while(b !== 0){
        r = a % b;
        a = b;
        b = r;
    }

    return a;
}

console.log(NWDDevide(num1, num2));