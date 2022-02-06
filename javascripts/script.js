// Função aplica o estilo nos inputs de acordo com seu valor
// Inputs sem valor mostram alerta na tela
function changeStyle(list, color, display) {
  list.forEach(element => {
    const id = element[0];
    const input = document.getElementById(id);
    const iconError = input.nextElementSibling;
    const warningMessage = iconError.nextElementSibling;

    input.style.borderColor = color;
    iconError.style.display = display;
    warningMessage.style.display = display;
  });
}

// Função verifica o valor recebido de cada input e chama a função
// changeStyle para mostrar ou não algum alerta
function emptyInputs(obj) {
  if (!obj.firstName || !obj.lastName || !obj.email || !obj.password) {
    const emptyInputs = Object.entries(obj).filter(item => !item[1]);
    const notEmptyInputs = Object.entries(obj).filter(item => item[1]);

    changeStyle(emptyInputs, "hsl(0, 100%, 74%)", "block");
    changeStyle(notEmptyInputs, "hsl(0, 0%, 83%)", "none");

    return 0;
  }
  changeStyle(Object.entries(obj), "hsl(0, 0%, 83%)", "none");
}

document.getElementById("submit").addEventListener("click", event => {
  const items = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document
      .getElementById("email")
      .value.match(document.getElementById("email").pattern),
    password: document.getElementById("password").value,
  };

  event.preventDefault();
  emptyInputs(items);
});
