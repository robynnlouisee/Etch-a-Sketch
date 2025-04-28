const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);

square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });

}

const resetBtn = document.getElementById('reset-button');

resetBtn.addEventListener("click", () => {
  let gridSize = prompt("Please enter the number of squares for the new grid:");
});