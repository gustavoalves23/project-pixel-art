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