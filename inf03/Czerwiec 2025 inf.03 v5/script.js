const addBtn = document.getElementById("add");
const img = document.getElementById("selectImg");
const imagesSection = document.getElementById("images");
addBtn.addEventListener("click", () => {
  let copies = document.getElementById("copies").value;
  let sum;
  if (document.getElementById("shining").checked) {
    sum = copies * 1.5;
  } else {
    sum = copies * 2;
  }

  let file = img.files[0].name;

  const newImg = document.createElement("img");
  newImg.src = "pliki6/" + file;
  imagesSection.appendChild(newImg);
  
  const newCopies = document.createElement("p");
  newCopies.innerText = "Liczba kopii: " + copies;
  imagesSection.appendChild(newCopies);
  
  const newPrice = document.createElement("p");
  newPrice.innerHTML = "Cena: " + sum + "<br>";
  imagesSection.appendChild(newPrice);
});
