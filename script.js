const container = document.querySelector('.container');
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}

for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);

square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });

}

const resetBtn = document.getElementById('reset-button');

resetBtn.addEventListener("click", () => {
  resetGrid();

});

const resetGrid = () => {
    container.innerHTML = '';

    let numSquares = prompt("Please enter the number of squares for the new grid:");

    if (numSquares > 100) {
        alert("The maximum number of squares is 100.");
        prompt("Please enter the number of squares for the new grid:");
        }
        
        

    numSquares = parseInt(numSquares);

        const totalSquares = numSquares * numSquares;

        const squareSize = 480 / numSquares;

        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            container.appendChild(square); 
            
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomColor();
            });
        }
    }
