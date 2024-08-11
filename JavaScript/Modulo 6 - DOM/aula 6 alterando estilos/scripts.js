//selecionanod o input pela tag name
const input = document.querySelector("#name");

//adicionando uma classe a um elemento html pelo js
input.classList.add("input-error");

//removendo uma classe de um elemento html pelo js
input.classList.remove("input-error");

//adicionando um class se ela não existir e removendo class se ela existir
input.classList.toggle("input-error");

//estilizando um elemento
const button = document.querySelector("button");

button.style.backgroundColor = "red";