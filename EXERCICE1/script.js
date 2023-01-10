let select = document.getElementById("genres");
let options = document.querySelectorAll("option");

let newOption = document.createElement("option");
newOption.innerHTML = "Classic";
newOption.setAttribute("value", "classic");
newOption.setAttribute("selected","");
select.appendChild(newOption);
