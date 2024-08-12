const amount = document.getElementById("amount");

//manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{

    //cirando variácel que captura todos os caracteres digitados no inpur
    const hasCactersRegex = /\D+/g;

    //atribuindo ao amount apenas valores númericos, pois estamso substituindo todos os caracteres recbidos pelo regez e ignorando eles
    amount.value = amount.value.replace(hasCactersRegex, "");
})