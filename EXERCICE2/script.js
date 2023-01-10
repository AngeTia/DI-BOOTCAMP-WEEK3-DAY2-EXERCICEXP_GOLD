let btn = document.querySelector("input");

btn.addEventListener("click", removecolor);

function removecolor(event) {
  event.preventDefault();
  let colorSelect = document.querySelectorAll("option");
  for (let i = 0; i < colorSelect.length; i++) {
    if (colorSelect[i].selected) {
      colorSelect[i].remove();
      break;
    }
  }
}