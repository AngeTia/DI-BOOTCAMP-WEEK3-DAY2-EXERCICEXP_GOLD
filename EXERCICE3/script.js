let divList = document.getElementById("root");
let shoppingList = [];

// creat elements
let form = document.createElement("form");
let inputEnter = document.createElement("input");
inputEnter.type = "text";

let addItem = document.createElement("button");
addItem.innerHTML = "AddItem";

let clearAll = document.createElement("button");
clearAll.innerHTML = "clearAll";

//Add elements in form 
form.appendChild(inputEnter);
form.appendChild(addItem);
form.appendChild(clearAll);

//Add form to Div
divList.appendChild(form);

// Add element to shopping
function funAddItem(event) {
  event.preventDefault(event);  
  let item = inputEnter.value;
  shoppingList.push(item);
  console.log(shoppingList);
}

// delete element from shopping
function funClearAll(){
    for (let element of shoppingList){
        element.remove();
    }
}

addItem.addEventListener("click", funAddItem); //Evennement d'ajout
clearAll.addEventListener("click", funClearAll); //Evennement de suppression