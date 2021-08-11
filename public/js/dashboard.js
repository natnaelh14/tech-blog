let textButton = document.querySelectorAll("#formButton");
let form = document.querySelector(".input-box");

var elements = document.getElementsByClassName("formButton");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    console.log(event.target.id);
    let test = document.getElementsByClassName("main-box");
    var index = parseInt(event.target.id);
    if (test[index].style.display === "none") {
      test[index].style.display = "block";
    } else {
      test[index].style.display = "none";
    }
  });
}

const updateBtn = document.getElementsByClassName("updateBtn");
for (var i = 0; i < elements.length; i++) {
  updateBtn[i].addEventListener("click", function (event) {
    console.log("hello", event.target.id);
    console.log(event.currentTarget.parentNode.parentNode.querySelector('.content-section'))
    console.log(event.currentTarget.parentNode.parentNode.querySelector('.title-section'))
  });
}

const deleteBtn = document.getElementsByClassName("deleteBtn");
for (var i = 0; i < elements.length; i++) {
  deleteBtn[i].addEventListener(
    "click", async function (event) {
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
        document.location.assign("/");
      } else {
        alert(response.statusText);
      }
    }
  );
}

const updatePostHandler = async (event) => {
  event.preventDefault();
  console.log("Hellloooowwww");
  const response = await fetch("/update", {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.assign("/");
  } else {
    alert(response.statusText);
  }
};


