const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
const lox = {
  email: " ",
  password: "",
};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Bсе поля должны быть заполнены!");
  }

  lox.email = email.value;
  lox.password = password.value;

  console.log(lox);
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
