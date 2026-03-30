const grid = document.querySelector("#canvas");
const resetButton = document.querySelector("#reset-canvas");
const setEraser = document.querySelector("#set-eraser");

let isDragging = false;
let isErasing = false;
let cells = [];

for(let row=0; row < 20; row++){
    for(let col = 0; col < 20; col++){
        const cell = document.createElement('div');
        cell.classList.add('pixel');
        cell.dataset.row = row;
        cell.dataset.col = col;
        grid.appendChild(cell);
        cell.push(cell);
    }
}