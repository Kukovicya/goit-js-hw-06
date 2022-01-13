let inputEl = document.querySelector('#name-input');

let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
  //   inputEl = event.currentTarget.value;
  //   inputEl !== ' ' ? (outputEl.innerText = inputEl.slice()) : 'Anonymous';
  // }
  inputEl.addEventListener('input', (event) =>{
if (inputEl.value !== '') {
  outputEl.textContent = event.currentTarget.value ;
  } else {
    outputEl.textContent = "Anonymus";
  }
});