const USD = 5.50;
const EUR = 6.01;
const GBP = 7.02;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

//manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{

    //cirando variácel que captura todos os caracteres digitados no inpur
    const hasCaractersRegex = /\D+/g;

    //atribuindo ao amount apenas valores númericos, pois estamso substituindo todos os caracteres recbidos pelo regez e ignorando eles
    amount.value = amount.value.replace(hasCaractersRegex, "");
})

//capturando o valor que é gerado nas opções de moeda quando clicamos no botão do botão
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value){
        case "USD": 
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)
}
