let board = document.querySelector('#board');
let squares = document.querySelectorAll('.inner');
let paletteContainer = document.querySelector('#palette');
let currentColor = document.querySelector('#current');

board.addEventListener('click', changeColor);
paletteContainer.addEventListener('click',  selectColor);

for (let i = 0; i < 42; i++) {
    let rowDiv = document.createElement('div');
    board.appendChild(rowDiv);
    for (let i = 0; i < 72; i++) {
        let pixelDiv = document.createElement('div');
        pixelDiv.classList.add('inner');
        rowDiv.appendChild(pixelDiv);
    }
}

function selectColor(e) {
    let target = e.target || e.srcElement;
    console.log("clicked");

    console.log(target.id);
    currentColor.setAttribute('style', 'background-color: ' + target.id);
}

function changeColor(e) {
    // colors = {'squareOne': 'red', 'squareTwo': 'blue', 'squareThree': 'green'}
    let target = e.target || e.srcElement;
    console.log("clicked");

    console.log(e.target, e.srcElement);

    // target.style.backgroundColor = colors[target.id];
    // target.style.backgroundColor = "red";
    target.classList.toggle("red");
    return false;
}

