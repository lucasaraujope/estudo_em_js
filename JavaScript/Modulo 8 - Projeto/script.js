const form = document.querySelector("forma");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

//manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{

    //cirando variácel que captura todos os caracteres digitados no inpur
    const hasCactersRegex = /\D+/g;

    //atribuindo ao amount apenas valores númericos, pois estamso substituindo todos os caracteres recbidos pelo regez e ignorando eles
    amount.value = amount.value.replace(hasCactersRegex, "");
})

//capturando o valor que é gerado nas opções de moeda quando clicamos no botão do botão
form.onsubmit = (event) => {
    event.preventDefault();

    console.log(currency.value);
}
