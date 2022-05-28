const mainContainer = document.querySelector('#mainContainer');

let row;
let column;

function createGrid() {
    for (i = 0; i < 16; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        mainContainer.appendChild(row);
        for (j = 0; j < 16; j++) {
            column = document.createElement('div');
            column.classList.add('column');         
            row.appendChild(column);
        }
    }
    return
}

const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click', () => {
    createGrid();
    btnStart.style.display = 'none';
});

