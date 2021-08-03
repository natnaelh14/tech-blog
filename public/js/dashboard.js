let textButton = document.querySelectorAll("#formButton");
let form = document.querySelector(".input-box");

var elements = document.getElementsByClassName("formButton");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (event) {
    let test = document.getElementsByClassName("main-box");
    var index = parseInt(event.target.id);
    if (test[index].style.display === "none") {
      test[index].style.display = "block";
    } else {
      test[index].style.display = "none";
    }
  });
}

$(document).on("click", ".update-button", function (e) {
  const test = $(this).closest(".text-section").find(".textarea").val();
  console.log(test);
});

const updatePostHandler = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/blogs/update", {
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

document.querySelector("#updateBtn").addEventListener("click", updatePostHandler);

const deletePostHandler = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/blogs/delete", {
    method: "DELETE",
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

document.querySelector("#deleteBtn").addEventListener("click", deletePostHandler);