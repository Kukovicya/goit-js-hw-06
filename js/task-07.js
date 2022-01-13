
const textEL =  document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", (el) => {
    const size = inputEl.value ;
     
    textEL.style.fontSize = size + "px";
})
