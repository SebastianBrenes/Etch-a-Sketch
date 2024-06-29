// This section is for the code needed add and hover effect over the grid

let container = document.querySelector('.container'); // select the container
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#666'; // highlights a square when the mouse hovers it
});


// This section is for the code needed to create the grid 

function insertDiv(row) {

    let newDiv = document.createElement('div'); // create the new div
    newDiv.className = "divGrid";
    newDiv.style.border = "1px solid grey";
    newDiv.style.height = "15px";
    newDiv.style.width = "15px";

    row.appendChild(newDiv);


}

function generateRows() {
    let i = 0;

    let newRow = document.createElement('div');
    newRow.className = 'row';
    newRow.style.display = 'flex';


    let container = document.querySelector('.container'); // select the container
    container.appendChild(newRow);

    while (i < gridSize) {
        insertDiv(newRow);
        i++;
    }
    return ''
}



function generateGrid() {

    let i = 0;
    
    while (i < gridSize) {
        generateRows();
        i++;
    }
}

// this section is for the button that generates larger grids

let button = document.querySelector('#buttonGrid')
button.addEventListener('click', () => {
    let newGridSize = prompt(`How many squares do you want?\nCurrently there are ${gridSize} squares`)
    if (newGridSize != "" && parseInt(newGridSize, 10) >= 1 && parseInt(newGridSize, 10) <= 100) {
        gridSize = parseInt(newGridSize, 10);
        let container = document.querySelector('.container'); // select the container
        container.innerHTML = ""; // removes every child inside of container
        generateGrid(); // regenerates the grid with the new number of rows-columns
    } else{
        alert("Invalid, try again");
    }
})



let gridSize = 16
generateGrid();

