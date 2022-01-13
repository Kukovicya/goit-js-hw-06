const form = document.querySelector(".change-color");

const forma = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(color);
const handleClick = (event) => {
  let color = getRandomHexColor();
  console.log(event);
  forma.textContent = color;
  document.body.style.background = color;
  // document.bodyColor.style.backgroundColor = color;
};

form.addEventListener("click", handleClick);
