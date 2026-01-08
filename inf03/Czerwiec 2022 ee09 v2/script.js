function color(){
    var value = document.getElementById("number").value;
    
    (document.getElementById("mainColor")).style.backgroundColor = "hsl(" + value + ", 100%, 50%)";
    (document.getElementById("color2")).style.backgroundColor = "hsl(" + value + ", 80%, 50%)";
    (document.getElementById("color3")).style.backgroundColor = "hsl(" + value + ", 60%, 50%)";
    (document.getElementById("color4")).style.backgroundColor = "hsl(" + value + ", 40%, 50%)";
    (document.getElementById("color5")).style.backgroundColor = "hsl(" + value + ", 20%, 50%)";
}