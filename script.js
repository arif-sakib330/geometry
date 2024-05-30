/**
 * triangle Calculation
 */

function triangle() {
  // triangle base
  const baseText = document.getElementById("tri-base");
  const baseTextValue = baseText.value;
  //   input feild sob kicho strung so string k number a convert korbo
  const baseNum = parseFloat(baseTextValue);
  //   console.log(baseNum);

  //    triangle height
  const heightText = document.getElementById("tri-height");
  const heightTextValue = heightText.value;
  const heightNum = parseFloat(heightTextValue);
  //   console.log(heightNum);

  //   calculation
  const area = 0.5 * baseNum * heightNum;
  console.log("Area is:", area);

  //   display
  const areaSpan = document.getElementById("tri-area-display");
  areaSpan.innerText = area;
}

/**
 * rectangle Calculation
 */

function rectangle() {
  // rectangle length
  const rectText = document.getElementById("rect-length");
  const rectTextValue = rectText.value;
  const lengthNum = parseFloat(rectTextValue);
  console.log(lengthNum);

  // rectangle width
  const widText = document.getElementById("rect-width");
  const widTextValue = widText.value;
  const widthNum = parseFloat(widTextValue);
  console.log(widthNum);

  //   rect-calculate
  const area = lengthNum * widthNum;
  console.log(area);

  //   //   display
  const d = document.getElementById("rect-area-display");
  d.innerText = area;
}
