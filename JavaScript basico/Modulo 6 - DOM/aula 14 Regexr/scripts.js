const input = document.querySelector("input");

//criando um escutador de evento que vai pegar o vlaor que for digitado no input

/*input.addEventListener("input", () => {
    console.log(input.value);
})*/


/*
input.addEventListener("input", () => {
    //variável para pegar o valor digitado no input
    const value = input.value;

    //variável que vai usar uma expressão regular para pegar todos os caacteres que não sejam números
    const regex = /\D+/g;

    //retorna o elementos que foi digitade e que não for número, pois estamos utilizando a variável regex como parâmetro
   // console.log(value.match(regex));

   /* TESTANDO O PADRÃO, SE É VÁLIDO OU NÃO
    //criando uma vriável para veer se o valor digitado no regez é verdadeiro ou FontFaceSetLoadEvent, assim podemos utilizar esse valor
    //const isValid = regex.test(value);
    console.log(isValid); 
})*/