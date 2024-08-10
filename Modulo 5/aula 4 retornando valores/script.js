function sum(a, b){
    let result = a + b;
    console.log(result);
}

//se eu quiser apenas exibir o valor essa funação acima está correta
sum(7,7);


//mas se eu quiser utilizar o valor que a função gera em outro local, eu preciso incluir um return na função
function sum2(a, b){
    let result = a + b;
    
    return result;
}

const value = sum2(7,7);
console.log(value);