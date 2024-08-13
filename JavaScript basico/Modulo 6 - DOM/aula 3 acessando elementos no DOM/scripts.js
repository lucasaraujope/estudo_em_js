//acessando o title da pagina 
const guest = document.title;
console.log(guest);

//acessando o elemento pelo ID
const guest2 = document.getElementById("guest-2");
console.log(guest2);


//acessando as propriedades de um elemento
console.log(guest2.dir);


//acessando o elemento pela class
const guest3 = document.getElementsByClassName("guest");
console.log(guest3);

//acessando o elemento pela class e filtrando por elemento
const guest4 = document.getElementsByClassName("guest");
console.log(guest4[1]);


//acessando lista de elementos pela tag
const guest5 = document.getElementsByTagName("li");
console.log(guest5)