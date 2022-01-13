const form = document.querySelector(".change-color");



const handleClick = event => {
  console.log(event);
  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
};

form.addEventListener("click", handleClick);