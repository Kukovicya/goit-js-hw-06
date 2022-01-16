let inputEl = document.querySelector("#name-input");

let outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (ev) => {
  outputEl.textContent = "Anonymus";
  if (inputEl.value !== "") {
    return (outputEl.textContent = ev.currentTarget.value);
  }
});
