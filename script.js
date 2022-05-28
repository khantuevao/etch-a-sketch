const mainContainer = document.querySelector('#mainContainer');


function createGrid() {
    for (i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        mainContainer.appendChild(row);
        for (j = 0; j < 16; j++) {
            let column = document.createElement('div');
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

