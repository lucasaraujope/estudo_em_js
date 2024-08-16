const input = document.getElementById("product-name");
const button = document.querySelector(".input-wrapper button");
const list = document.querySelector(".input-list");
const ulList = document.querySelector(".input-list ul");
const icons = document.querySelectorAll(".item img")
const message = document.getElementById("message")

let id = 0;

button.addEventListener("click", () => {
  createItem();
  
});

input.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        createItem();
        input.value.replace(input.value, "");
      }
});

function createItem(item) {
  const nameProduct = input.value;

 
  const newLi = document.createElement("li");
  newLi.classList.add("item");
  id++;
  newLi.setAttribute("id", `id-${id}`)

  const newDivInfo = document.createElement("div");
  
  const newInput = document.createElement("input");
  const newSpan = document.createElement("span");
  newSpan.textContent = `${nameProduct}`;

  const newImg = document.createElement("img");
  newImg.setAttribute("src", "Assets/Icons/icon-delete.svg");
  newImg.setAttribute("data-id", `id-${id}`);
  
  newImg.addEventListener("click", (event) => {     
    deleteItem(event.target.dataset.id)
    message.classList.remove("information-under")
    message.classList.add("information")
    
  })

  ulList.append(newLi);
  newLi.append(newDivInfo);
  newLi.append(newImg);
  newDivInfo.append(newInput);
  newDivInfo.append(newSpan);
  newDivInfo.classList.add("checkbox-info");
  newInput.setAttribute("type", "checkbox");
}


function deleteItem(id){
    const item = document.querySelector(`#${id}`)
    item.remove();
}


