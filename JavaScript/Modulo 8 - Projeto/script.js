//Variáveis com valores atualizados da moedas estrangeiras
const USD = 5.50;
const EUR = 6.01;
const GBP = 7.02;

//Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{

    //cirando variácel que captura todos os caracteres digitados no inpur
    const hasCaractersRegex = /\D+/g;

    //atribuindo ao amount apenas valores númericos, pois estamso substituindo todos os caracteres recbidos pelo regez e ignorando eles
    amount.value = amount.value.replace(hasCaractersRegex, "");
});

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

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try{
        //altera o conteúdo do footer de forma dinâmica para utilizar os valores que utilizamos nas variávei do JS
        description.textContent = `${symbol} 1 = R$${formatCurrencyBRL(price)}`
        
        //aplica a classe que exibe o resultado da conversão na aplicação
        footer.classList.add("show-result");
        
        //gera o valor total da conversão
        let total = amount * price;

        //validando se o valor digitado é um número
        if(isNaN(total)){
            return alert("Por favor, digite um número válido!")
        }
        
        //formata o toal para o padrão BRL
        total = formatCurrencyBRL(total).replace("R$", "")

        //exibe o resultado total da conversão no padrão de moeda BRL
        result.textContent = `${total} Reais`;
    } catch(error){
        //remove a classe que exibe o resultado da conversão na aplicação
        footer.classList.remove("show-result");

        //exibe um erro no console para saber o que aconteceu
        console.log(error);
        
        //exibe um alerta de erro para o cliente que estiver usando a aplicação
        alert("Não foi possível converter. Tente novamente mais tarde!")
    }
}

//formata a moeda para o padrão Real brasileiro
function formatCurrencyBRL(value){
    //convertendo para número para poder utilizar o toLocaleString para formatar para o padrão BRL
    return  Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
