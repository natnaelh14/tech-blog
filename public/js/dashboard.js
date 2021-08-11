let textButton = document.querySelectorAll("#formButton");
let form = document.querySelector(".input-box");

var elements = document.getElementsByClassName("formButton");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    const index = parseInt(event.target.id);
    if (document.getElementById("edit-" + index).style.display !== "flex") {
      document.getElementById("edit-" + index).style.display = "flex";
    } else {
      document.getElementById("edit-" + index).style.display = "none";
    }
  });
}

const updateBtn = document.getElementsByClassName("updateBtn");
for (var i = 0; i < elements.length; i++) {
  updateBtn[i].addEventListener(
    "click",
    async function updatePostHandler(event) {
      event.preventDefault();
      const updateId = parseInt(event.target.id);
      const content = document.getElementById("content-" + updateId).value;
      const title = document.getElementById("title-" + updateId).value;
      const response = await fetch("/update", {
        method: "PUT",
        body: JSON.stringify({
          title,
          content,
          updateId,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.assign("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  );
}

const deleteBtn = document.getElementsByClassName("deleteBtn");
for (var i = 0; i < elements.length; i++) {
  deleteBtn[i].addEventListener("click", async function (event) {
    event.preventDefault();
    const deleteId = event.target.id;
    const response = await fetch("/delete", {
      method: "DELETE",
      body: JSON.stringify({
        deleteId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.assign("/dashboard");
    } else {
      alert(response.statusText);
    }
  });
}
