// parallelogram
function parallelogram() {
  const base = inputValue("Para-base");
  const height = inputValue("para-height");

  const area = base * height;
  console.log(area);
  innerText("para-area", area);
}

// rhombus
function rhombus() {
  const base = inputValue("rhombus-base");
  const height = inputValue("rhombus-height");

  const area = 0.5 * base * height;
  console.log(area);
  innerText("rhombus-area", area);
}

// pentagon
function pentagon() {
  const base = inputValue("pentagon-base");
  const height = inputValue("pentagon-height");

  const area = 0.5 * base * height;
  console.log(area);
  innerText("pentagon-area", area);
}

// Ellipse
function ellipse() {
  const base = inputValue("ellipse-base");
  const height = inputValue("ellipse-height");

  const area = 3.1416 * base * height;
  console.log(area);
  innerText("ellipse-area", area);
}

// function for all cards
function inputValue(inputId) {
  const inputText = document.getElementById(inputId);
  const inputTextValue = inputText.value;
  const inputNum = parseFloat(inputTextValue);
  return inputNum;
}

function innerText(elementId, area) {
  const text = document.getElementById(elementId);
  text.innerText = area;
}
