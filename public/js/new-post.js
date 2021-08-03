
const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-input").value.trim();
  const content = document.querySelector("#content-input").value.trim();

  const response = await fetch("/api/blogs/new-post", {
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

document.querySelector("#create-post").addEventListener("click", newPostHandler);

