let color = 'black';
const button = document.getElementById('clear-board');
const changeSizeButton = document.getElementById('generate-board');
const selectedColorClass = 'color selected';

function randomColor() {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  const bright = parseInt((Math.random() * 100), 10);
  return (`rgba(${red},${green},${blue},${bright})`);
}

function createColorPallete() {
  const otherColorsClass = 'color';
  const pallet = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const colorDiv = document.createElement('div');
    const eachColor = ['black', randomColor(), randomColor(), randomColor()];
    if (eachColor[index] === 'black') {
      colorDiv.className = selectedColorClass;
    } else {
      colorDiv.className = otherColorsClass;
    }
    colorDiv.style.backgroundColor = (eachColor[index]);
    pallet.appendChild(colorDiv);
  }
}
createColorPallete();

function pixelFiller(tableSize, line) {
  const lineColumnFiller = document.getElementsByClassName('lineColumn');
  for (let index = 0; index < tableSize; index += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    lineColumnFiller[line].appendChild(pixel);
  }
}
function tableMaker(tableSize) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < tableSize; index += 1) {
    const lineColumn = document.createElement('tr');
    lineColumn.className = 'lineColumn';
    pixelBoard.appendChild(lineColumn);
  }
  for (let line = 0; line < tableSize; line += 1) {
    pixelFiller(tableSize, line);
  }
}
tableMaker(5);

function changedPickedColor() {
  const actualSelectedColor = document.getElementsByClassName(selectedColorClass);
  color = actualSelectedColor[0].style.backgroundColor;
}

function selectedColorChanger(colorButton) {
  const colorButtonChanger = colorButton;
  const actualSelectedColor = document.getElementsByClassName(selectedColorClass);
  if (colorButtonChanger.target.className !== selectedColorClass) {
    actualSelectedColor[0].className = 'color';
    colorButtonChanger.target.className = selectedColorClass;
    changedPickedColor();
  }
}

function colorSelectorButtons() {
  const colorPalleteContainer = document.getElementById('color-palette');
  const colorsQuantity = colorPalleteContainer.childElementCount;
  for (let index = 0; index < colorsQuantity; index += 1) {
    const colorSelect = document.getElementsByClassName('color')[index];
    colorSelect.addEventListener('click', selectedColorChanger);
  }
}
colorSelectorButtons();

function changeColor(blankPixelToChange) {
  const pixelColorChanger = blankPixelToChange;
  pixelColorChanger.target.style.backgroundColor = color;
}
function pixelSelectorButtons() {
  const blankPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < blankPixel.length; index += 1) {
    blankPixel[index].addEventListener('click', changeColor);
  }
}

pixelSelectorButtons();

function BoardCleaner() {
  const pixelsToClear = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelsToClear.length; index += 1) {
    pixelsToClear[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', BoardCleaner);

function tableSizeInput(inputTextSize) {
  if (inputTextSize === '') {
    alert('Board inválido!');
  }
  if (inputTextSize < 5) {
    return (5);
  }
  if (inputTextSize > 50) {
    return (50);
  }
  return (inputTextSize);
}

function clearAndGenerate() {
  const inputTextSize = document.getElementById('board-size').value;
  const table = document.getElementById('pixel-board');
  table.innerHTML = '';
  tableMaker(tableSizeInput(inputTextSize));
  pixelSelectorButtons();
}

changeSizeButton.addEventListener('click', clearAndGenerate);
