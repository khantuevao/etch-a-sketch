const mainContainer = document.querySelector('#mainContainer');

const createRow = function() {
    row = document.createElement('div');
    row.classList.add('row');
    mainContainer.appendChild(row);
}

const createColumn = function() {
    column = document.createElement('div');
    column.setAttribute('id', 'columnid')
    column.classList.add('column');         
    row.appendChild(column);
}

function createGrid() {
    for (i = 0; i < 16; i++) {
        createRow();
        for (j = 0; j < 16; j++) {
            createColumn();
        }
    }

    mainContainer.classList.add('mainContainer');

    let columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function(event) {
        event.target.classList.add('hover');
        setTimeout(function() {
            event.target.classList.remove('hover');
        }, 500);
    }, false));
}

const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click', () => {
    createGrid();
    btnStart.style.display = 'none';
});


