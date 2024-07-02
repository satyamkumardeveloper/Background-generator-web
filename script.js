const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const cssCode = document.getElementById('cssCode');
const body = document.getElementById('gradient');
const directions = document.getElementsByName('direction');
const types = document.getElementsByName('type');

function setGradient() {
  let selectedDirection;
  for (const direction of directions) {
    if (direction.checked) {
      selectedDirection = direction.value;
      break;
    }
  }

  let selectedType;
  for (const type of types) {
    if (type.checked) {
      selectedType = type.value;
      break;
    }
  }

  let gradient;
  if (selectedType === 'linear') {
    gradient = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;
  } else if (selectedType === 'radial') {
    gradient = `radial-gradient(${color1.value}, ${color2.value})`;
  } else if (selectedType === 'conic') {
    gradient = `conic-gradient(${color1.value}, ${color2.value})`;
  }

  body.style.background = gradient;
  cssCode.textContent = gradient + ';';
}

setGradient();
