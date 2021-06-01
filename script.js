function createColorPallete(){
    let pallet = document.getElementById("color-palette");
    for (let index = 0; index < 4; index += 1){
        let color = document.createElement("div");
        let eachColor = ["black", "red", "blue", "green"];
        if (eachColor[index] ==="black"){
            color.className = "color selected";
        }else{
            color.className = "color";
        }
        color.style.backgroundColor = (eachColor[index]);
        pallet.appendChild(color);
     }
}
createColorPallete();

function pixelFiller(tableSize, line) {
    let lineColumnFiller = document.getElementsByClassName("lineColumn");
    for (let index = 0; index < tableSize; index += 1){
        let pixel = document.createElement("td");
        pixel.className = "pixel";
        lineColumnFiller[line].appendChild(pixel);
    }
}
function tableMaker(tableSize) {
    let pixelBoard = document.getElementById("pixel-board");
    for (let index = 0; index < tableSize; index += 1){
        let lineColumn = document.createElement("tr");
        lineColumn.className = "lineColumn";
        pixelBoard.appendChild(lineColumn);
    }
    for (let line = 0; line < tableSize; line  += 1){
    pixelFiller(tableSize , line);
    }
}
tableMaker(5);