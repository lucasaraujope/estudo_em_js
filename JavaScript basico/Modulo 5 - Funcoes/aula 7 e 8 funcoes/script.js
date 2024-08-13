//função anonima, função que não tem nome, criamos ela para guardar ela dentro de uma variável

//-------SEM PARAMETRO-------
const showMessage = function(){
    return "Olá Lucas";
}

console.log(showMessage());

//-------COM PARAMETRO-------
const showMessage2 = function(nome, sobrenome){
    return `Olá, ${nome} ${sobrenome}`
}

console.log(showMessage2("Lucas", "Araujo"));

//-------------------------------------------------------------------------------------------------------------------------------
//arrow function
//-------SEM PARAMETRO-------
const showMessage3 = () => {
    return "Olá Lucas";
}


//-------COM PARAMETRO-------
const showMessage4 = (nome, sobrenome) => {
    return `Olá, ${nome} ${sobrenome}`
}

console.log(showMessage2("Lucas", "Araujo"));

//-------------------------------------------------------------------------------------------------------------------------------
//Callback function, função que é passada para outra função como argumento
function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName);

    callback();
}

//criando função para ser chamada dentro de outra função como parametro
function callback(){
    console.log("Tarefa finalizada.")
}

//passando a função para a outra função
execute("Download do aequivo...", callback);

//criando a função no próprio parâmetro (função anônima)
execute("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima.")
})

//criando a função como arrow function
execute("Upload do arquivo...", () =>{
    console.log("Função de callback com uma arrow function.")
})