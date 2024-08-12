
//adicionando um escutador de eventos para o evento load
window.addEventListener ("load", () => {
    console.log("A página foi recarregada");
});


//adicionando um escutador de eventos para o evento click, quando algum click for dado na tela o event pegará o que o ocorreu
addEventListener ("click", (event) => {
    /* Quando utilizamos a tag form por padrão o formularío entende que queremos enviar algo ou quando o botão 
    tem o type de submit, então quando clicamos no botão ele atualiza a página sózinho, como um padrão do navegador
    por isso usamos o preventDefault, para que isso não ocorra*/
    event.preventDefault();

    //capturando o evento da página
    //console.log(event);

    //retorna o elemento clicado
    console.log(event.target);

    //retorna o conteúdo do elemento
    console.log(event.target.textContent);
})