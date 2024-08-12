const input = document.querySelector("input");


//keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc)
input.addEventListener("keydown", (event) => {
    console.log(event.key);
})

//A diferença entre o keypress e o keydown é que o keypress ignora os botões que não são caracteres como CTRL, SHIFT etc
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

//criando um função para alertar quando o input é alterado
function inpuChange(){
    console.log("O input mudou");
}

//criando o evento que captura a ação quando o evento é alterado
input.onchange = (event) => inpuChange(); 