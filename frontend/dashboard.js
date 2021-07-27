let button = document.querySelectorAll(".formButton");
let form = document.querySelector(".input-box");

function displayForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
for (i of button) {
  i.addEventListener("click", displayForm);
}
