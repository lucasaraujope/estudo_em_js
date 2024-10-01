/*
    OPTIONAL CHAINING (?.) - encadeamento opcional
    Se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna 
    undefined em vez de gerar um erro

    Útil para explorar o conteúdo de um objeto quando não existe garantia da existenciade determinada
    propriedades obrigatórias
*/

const user = {
    //id: 2,
    name: "Lucas",
    adress: {
        street: "Estrada dos Pereiras",
        number: 3489,
        city: "Cotia",
    },
    /*message: function () {
        console.log(`Oi ${this.name}`)
    }*/
}

/*Se eu comentar um código e chamá-lo no console.log, no console do navegador gerará uma exception 
mas se seu usar o optional chaning (?.) ele irá me retornar undefined
*/

//Exemplo de retorno com erro 
console.log(user.id);

//exemplo de undefined
console.log(user?.id);

//exemplo na função - retorno com erro
user.message();

//exemplo na função - retorno com undefined
user.message?.();