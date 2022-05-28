const btnStart = document.querySelector('#btnStart');
btnStart.addEventListener('click', () => {
    createGrid();
    btnStart.style.display = 'none';
});

const createRow = function() {
    row = document.createElement('div');
    row.classList.add('row');
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.appendChild(row);
}

const createColumn = function() {
    column = document.createElement('div');
    column.setAttribute('id', 'columnid')
    column.classList.add('column');         
    row.appendChild(column);
}

function createButton() {
    let btnAsk = document.createElement('button');
    btnAsk.setAttribute('id', 'btnAsk');
    btnAsk.textContent = 'Change grid';
    let body = document.querySelector('body');
    body.prepend(btnAsk);
    const btnAskCh = document.querySelector('#btnAsk');
    btnAskCh.addEventListener('click', changeGrid);
}

function hover() {
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => column.addEventListener('mouseover', function(event) {
        event.target.classList.add('hover');
    }, false));
}

function createGrid() {
    mainContainer.classList.add('mainContainer');
    createButton();
    for (i = 0; i < 16; i++) {
        createRow();
        for (j = 0; j < 16; j++) {
            createColumn();
        }
    }
    hover();
}

function changeGrid() {
    let result = prompt('Enter number of squares per side', '');
    if (isNaN(result) || result < 0) {
        alert('Error, please enter a valid number');
    } else if (result > 100) {
        alert('Please enter a number less than 100');
    } else {
        const remove = document.querySelectorAll('.row');
        remove.forEach(row => {
            row.remove();
        });
        for (i = 0; i < result; i++) {
            createRow();
            for (j = 0; j < result; j++) {
                createColumn();
            }
        }
    }
    hover();
}