const button = document.querySelector(".button");
const buttonShuffle = document.querySelector(".buttonShuffle");
const container = document.querySelector(".container");
const images = document.querySelectorAll(".image");
let myArray = [0, 1, 2, 3, 4];

function shuffle(arra1) {
  let ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

buttonShuffle.addEventListener("click", () => {
  shuffle(myArray);
  for (let index = 0; index < images.length; index++) {
    images[index].src = `./images/image${myArray[index]}.png`;
  }
});

button.addEventListener("click", () => {
  container.classList.toggle("container-none");
});
