const mainContainer = document.getElementById('main-container')

const newGrid = document.createElement('button')
newGrid.textContent = 'Create new grid'
newGrid.addEventListener('click', () => {
    let gridSize = prompt('Enter a number', 0)
    clearGrid()
    createNewGrid(gridSize)
})
document.body.appendChild(newGrid)

function clearGrid() {
    mainContainer.innerHTML = ''
}

function createNewGrid(num) {
    //set limitations
    if (num > 100) {
        alert('Cannot be over 100')
        return
    }
    if (isNaN(num)) {
        alert('Should be a number')
        return
    }
    //create fixed number of rows
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        //append to each row a fixed number of squares
        for (let j = 0; j < num; j++) {
            const square = document.createElement('div')
            square.classList.add('square')
            //change square class on hover
            square.addEventListener('mouseover', () => {
                square.classList.add('selected')
            })
            row.appendChild(square)
        }
        mainContainer.appendChild(row)
    }
}

createNewGrid(16)