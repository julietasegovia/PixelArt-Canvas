const grid = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-canvas");
const setEraser = document.querySelector("#set-eraser");

let isDragging = false;
let isErasing = false;
let cells = [];

for(let row = 0; row < 20; row++){
    for(let col = 0; col < 20; col++){
        const cell = document.createElement('div');
        cell.classList.add('pixel');
        cell.dataset.row = row;
        cell.dataset.col = col;
        grid.appendChild(cell);
        cells.push(cell);
    }
}

function cellMode(cell){
    if(isErasing)
        cell.classList.remove('active');
    else
        cell.classList.add('active');
}

cells.forEach(cell => {
    cell.addEventListener('mousedown', (e) => { //when a cell is clicked, draw or erase dpending on cell mode
        e.preventDefault();
        isDragging = true;
        cellMode(cell);
    });

    cell.addEventListener('mouseenter', () => { //enables infinite dragging
        if(isDragging)
            cellMode(cell);
    });

    cell.addEventListener('mouseup', (e) => { //stops drawing/erasing when user stops dragging the mouse
        isDragging = false;
    });
})

resetButton.addEventListener("click", () =>{
    cells.forEach(cell => {
        cell.classList.remove("active");
    });
})

setEraser.addEventListener("click", () =>{
    if(isErasing){ //disables erasing
        setEraser.classList.remove('eraser-set');
        isErasing = false;
    }
    else{ //enables erasing
        setEraser.classList.add('eraser-set');
        isErasing = true;
    }
})