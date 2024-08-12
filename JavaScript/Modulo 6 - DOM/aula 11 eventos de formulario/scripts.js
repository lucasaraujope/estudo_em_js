const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez o submit no formulário #1")
}

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez o submit no formulário #2")
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez o submit no formulário #3")
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez o submit no formulário #4")
})

/* A primeira diferença entre o onsubmit e o addEventListener é que não precisamos passar como parâmetro o evento que vamos escutar 
  A segunda é que o onsubmit só executa o último onsubmit criado, já o addEventListener executa todos criados, logo o resultado no console erá a exibição dos seguintes textos
  Você fez o submit no formulário #2 / Você fez o submit no formulário #3 / Você fez o submit no formulário #4
*/