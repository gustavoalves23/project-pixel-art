let color = 'black';
let button = document.getElementById('clear-board');
let changeSizeButton = document.getElementById("generate-board");

function randomColor(){
    let red = parseInt(Math.random() * 255);
    let green = parseInt(Math.random() * 255);
    let blue = parseInt(Math.random() * 255);
    let bright = parseInt(Math.random() * 100);
    return(`rgba(${red},${green},${blue},${bright})`);
    }

function createColorPallete() {
  let pallet = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    let colorDiv = document.createElement('div');
    let eachColor = ['black', randomColor(), randomColor(), randomColor()];
    if (eachColor[index] === 'black') {
      colorDiv.className = 'color selected';
    } else {
      colorDiv.className = 'color';
    }
    colorDiv.style.backgroundColor = (eachColor[index]);
    pallet.appendChild(colorDiv);
  }
}
createColorPallete();

function pixelFiller(tableSize, line) {
  let lineColumnFiller = document.getElementsByClassName('lineColumn');
  for (let index = 0; index < tableSize; index += 1) {
    let pixel = document.createElement('td');
    pixel.className = 'pixel';
    lineColumnFiller[line].appendChild(pixel);
  }
}
function tableMaker(tableSize) {
  let pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < tableSize; index += 1) {
    let lineColumn = document.createElement('tr');
    lineColumn.className = 'lineColumn';
    pixelBoard.appendChild(lineColumn);
  }
  for (let line = 0; line < tableSize; line += 1) {
    pixelFiller(tableSize, line);
  }
}
tableMaker(5);

function changedPickedColor() {
  let actualSelectedColor = document.getElementsByClassName('color selected');
  color = actualSelectedColor[0].style.backgroundColor;
}

function selectedColorChanger(button) {
  let actualSelectedColor = document.getElementsByClassName('color selected');
  if (button.target.className !== 'color selected') {
    actualSelectedColor[0].className = 'color';
    button.target.className = 'color selected';
    changedPickedColor();
  }
}

function colorSelectorButtons() {
  let colorPalleteContainer = document.getElementById('color-palette');
  let colorsQuantity = colorPalleteContainer.childElementCount;
  for (let index = 0; index < colorsQuantity; index += 1) {
    let colorSelect = document.getElementsByClassName('color')[index];
    colorSelect.addEventListener('click', selectedColorChanger);
  }
}
colorSelectorButtons();

function changeColor(blankPixelToChange) {
  blankPixelToChange.target.style.backgroundColor = color;
}
function pixelSelectorButtons() {
  let blankPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < blankPixel.length; index += 1) {
    blankPixel[index].addEventListener('click', changeColor);
  }
}

pixelSelectorButtons();

function BoardCleaner() {
  let pixelsToClear = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelsToClear.length; index += 1) {
    pixelsToClear[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', BoardCleaner);

function tableSizeInput (inputTextSize){
    if (inputTextSize == ''){
        alert('Board inválido!');
    }
    if (inputTextSize < 5){
        return(5);
    }
    if (inputTextSize > 50){
        return(50);
    }
    return(inputTextSize);
    }
    
    function clearAndGenerate() {
        let inputTextSize = document.getElementById("board-size").value;
        let table =  document.getElementById("pixel-board");
        table.innerHTML = "";
        tableMaker(tableSizeInput(inputTextSize));
        pixelSelectorButtons();
    }
    
    changeSizeButton.addEventListener("click", clearAndGenerate);