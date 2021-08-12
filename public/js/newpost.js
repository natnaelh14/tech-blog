const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input").value.trim();
  const content = document.querySelector("#content-input").value.trim();
  if (title === '' || content === '') {
    return;
  }
  await fetch(`/newpost`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.assign("/");
};

window.onload = function () {
  document
    .getElementById("create-post")
    .addEventListener("click", newPostHandler);
};
