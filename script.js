const mainContainer = document.getElementById('main-container')

//create 16 containers & put inside main-container
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        square.style.cssText = 'background-color: lightpink'
    })
    mainContainer.appendChild(square)
}