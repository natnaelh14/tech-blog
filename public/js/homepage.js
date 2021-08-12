var elements = document.getElementsByClassName("commentBtn");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    const index = parseInt(event.target.id);
    if (document.getElementById("comment-" + index).style.display !== "block") {
      document.getElementById("comment-" + index).style.display = "block";
    } else {
      document.getElementById("comment-" + index).style.display = "none";
    }
  });
}

var postButtons = document.getElementsByClassName("postBtn");
for (var i = 0; i < postButtons.length; i++) {
  postButtons[i].addEventListener("click", async function (event) {
    event.preventDefault();
    const blogId = parseInt(event.target.id);
    const comment = document.getElementById("comment-text-" + blogId).value;
    if (comment === '') {
      return;
    }
    const response = await fetch("/comment", {
      method: "POST",
      body: JSON.stringify({
        comment,
        blogId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  });
}
