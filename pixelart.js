const grid = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-canvas");
const setEraser = document.querySelector("#set-eraser");
const chosenColor = document.querySelector("#chosen-color");

let isDragging = false;
let isErasing = false;
let cells = [];
let trueColor = "rgb(255, 0, 0)";

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
    if(isErasing){
        cell.style.backgroundColor = "rgb(255, 255, 255)";
        cell.style.borderColor = "rgb(219, 217, 217)"
    }
    else{
        cell.style.backgroundColor = trueColor;
        cell.style.borderColor = trueColor;        
    }
}

chosenColor.addEventListener("input", (e) => {
    trueColor = e.target.value;

    if(isErasing){
        setEraser.classList.remove('eraser-set');
        isErasing = false;
    }
});

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
        cell.style.backgroundColor = "rgb(255, 255, 255)";
        cell.style.borderColor = "rgb(219, 217, 217)"
        setEraser.classList.remove('eraser-set');
        isErasing = false;
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