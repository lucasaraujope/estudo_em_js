const guest = document.querySelector("ul");


const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const newName = document.createElement("span");

newName.textContent = "Lucas";

//utilizando o append eu adiciono um elemento após o último filho e aceita dois argumentos
newGuest.append(newName);

//utilizando o append eu adiciono um elemento antes do primeiro filho e aceita dois argumentos
//newGuest.prepend(newName);

//AInda tem um método mais simples, porém ele só aceita um argumento
//newGuest.appendChild(newName);

guest.append(newGuest);




//console.log(newGuest);