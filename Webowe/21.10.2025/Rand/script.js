// 5 liczb losowych od 0 do 1
// for(let i = 0; i < 5; i++){
//     let x = Math.random();
//     console.log(x);
// }

// 5 liczb całkowitych losowych od (lub równych) 0 do 100
// for(let i = 0; i < 5; i++){
//     let x = Math.floor(Math.random()*100);
//     console.log(x);
// }

// utwórz liczbę losową naturalną z zakresu 10 <= n <= 20
function rand(min, max){
    let x = Math.floor(Math.random()*(max - min + 1) + min);
    return x;
}

for(let i = 0; i < 5; i++){
    console.log(rand(10, 20));
}
