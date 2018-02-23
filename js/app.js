let board = document.querySelector('#board');
let squares = document.querySelectorAll('.inner');
let palette = document.querySelector('#palette');
let currentIndicatedColor = document.querySelector('#current');
let currentColor = null;

const colors = ["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGreen",
"DarkGrey",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
]

board.addEventListener('click', changeColor);
palette.addEventListener('click',  selectColor);

for (let i = 0; i < 42; i++) {
    let rowDiv = document.createElement('div');
    board.appendChild(rowDiv);
    for (let i = 0; i < 72; i++) {
        let pixelDiv = document.createElement('div');
        pixelDiv.classList.add('inner');
        rowDiv.appendChild(pixelDiv);
    }
}

colors.forEach(color => {
    let colorNode = document.createElement('div', {id : color, style: "background-color: " + color});
    colorNode.setAttribute('id', color);
    colorNode.setAttribute('style', "background-color: " + color);
    palette.appendChild(colorNode);
})

function selectColor(e) {
    let target = e.target || e.srcElement;
    console.log("clicked");

    console.log(target.id);
    currentIndicatedColor.setAttribute('style', 'background-color: ' + target.id);
    currentColor = target.id;
}

function changeColor(e) {
    // colors = {'squareOne': 'red', 'squareTwo': 'blue', 'squareThree': 'green'}
    let target = e.target || e.srcElement;
    console.log("clicked");

    console.log(e.target, e.srcElement);

    // target.style.backgroundColor = colors[target.id];
    // target.style.backgroundColor = "red";
    // target.classList.toggle("red");
    target.setAttribute('style', 'background-color: ' + currentColor);
    return false;
}

