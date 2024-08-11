const guest = document.querySelector("guest-1");

console.log(guest.textContent); //retorna o conteúdo visivel e oculto e se não selecionarmos especificamente a tag do conteúdo que queremos subistituir ele elimina a tag do texto
console.log(guest.innerText); // retorna somente o conteúdo visivel
console.log(guest.innerHTML); //retorna o html como texto

