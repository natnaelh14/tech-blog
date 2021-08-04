
const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input").value.trim();
  const content = document.querySelector("#content-input").value.trim();

  const response = await fetch('/new-post', {
    method: "POST",
    body: JSON.stringify({title, content}),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response)
  if (response.ok) {
    document.location.assign("/");
  } else {
    alert('Failed to save post');
  }
};

window.onload = function () {
  document.getElementById("create-post").addEventListener("click", newPostHandler);
}

