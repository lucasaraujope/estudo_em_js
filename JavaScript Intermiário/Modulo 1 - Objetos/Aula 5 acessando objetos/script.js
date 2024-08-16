//Criando um objeto vazio
const obj = {};

//Criando um objeto do tipo pessoa com propriedades e métodos
const user = {
    email: "lucas.araujope22@gmail.com",
    age: 29,
    name: {
        firstName: "Lucas",
        surname: "Araujo"
    },

    adress: {
        street: "Estrada dos pereiras",
        neighborhood: "Chacára Real",
        house_number: 3489,
        complement: "House 14"
    },

    falaOi: function(){
        console.log("Oi");
    }
}

//acessando propriedades e métodos utilizando notação de ponto.
console.log(user.name);

console.log(user.name.surname);

console.log(user.name.firstName);


//Executando o método do objeto
user.falaOi();
console.log(user.adress["street"]);
//acessando propriedades e métodos utilizando notação de colchetes.