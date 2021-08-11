var elements = document.getElementsByClassName("commentBtn");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    const index = parseInt(event.target.id);
    console.log(index)
    if (document.getElementById("comment-" + index).style.display !== "block") {
      document.getElementById("comment-" + index).style.display = "block";
    } else {
      document.getElementById("comment-" + index).style.display = "none";
    }
  });
}