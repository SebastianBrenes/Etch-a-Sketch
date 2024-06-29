
function insertDiv(row) {

    let newDiv = document.createElement('div'); // create the new div
    newDiv.className = "divGrid";
    newDiv.style.border = "1px solid grey";
    newDiv.style.height = "35px";
    newDiv.style.width = "35px";

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

const gridSize = 16


function generateGrid() {
    let i = 0;
    
    while (i < gridSize) {
        console.log(`he agregado el row ${i}`);
        generateRows();
        i++;
    }
}


generateGrid();

