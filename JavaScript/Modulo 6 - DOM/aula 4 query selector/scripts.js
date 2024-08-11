//Aqui diferente do acesso aos elementos pelo tag, id ou class diretamente, nós usamos uma query e ela libera acesso ao DOM
//assim podemos selecionar qualquer elemento utilizando ID, class ou tag, porém precisamos passar o parametro como se tivessemos usando no CSS


//selecionando pelo ID
const guest = document.querySelector("#guest-2");
console.log(guest);

//selecionando pela class
const guest2 = document.querySelector(".guest");
console.log(guest2);

//selecionando todos os elementos com a mesma classe
const guest3 = document.querySelectorAll(".guest");
console.log(guest3);