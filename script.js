const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-button');


for (let i = 0; i < 256; i++) {
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);

square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });

}

resetBtn.addEventListener("click", () => {
  resetGrid();
});

const resetGrid = () => {
    container.innerHTML = '';

    let numSquares = prompt("Please enter the number of squares for the new grid:");
    while (numSquares === '' || isNaN(numSquares) || numSquares <= 0 || numSquares > 100) {
        if (numSquares === '') {
            alert("Please enter a valid number.");
        } else if (isNaN(numSquares)) {
            alert("Please enter a valid number.");
        } else if (numSquares > 100) {
            alert("The maximum number of squares is 100.");
        }

        numSquares = prompt("Please enter the number of squares for the new grid:");
    } 

    numSquares = parseInt(numSquares);


        const totalSquares = numSquares * numSquares;
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square); 
     
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });
        }
    };
    
    
  

