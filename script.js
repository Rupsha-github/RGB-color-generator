const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyRGBValue);

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbaColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = rgbaColor;
    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    inputTypeRGBValue.textContent = rgbaColor;
}

updateColor();


function copyRGBValue() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(() => {
            alert("RGB color value copied to clipboard : " + rgbColor);
        })

        .catch((error) => {
            console.error("Failed to copy RGB Value", error);
        })
}


