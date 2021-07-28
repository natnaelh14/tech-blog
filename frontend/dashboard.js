let t = document.querySelectorAll(".single-post");
let form = document.querySelector(".input-box");
const singleBlogID = document.querySelector('input[name="post-id"]').value;


$(document).on("click", ".formButton", function (e) {
    e.preventDefault();
   $(e.currentTarget).toggleClass

});

document.querySelector('#updatebutton').addEventListener('click', updateClickFunction);
document.querySelector('#deletebutton').addEventListener('click', delClickFunction);

const updateClickFunction = async function(event) {
  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;  
  const title = document.querySelector('#').value.trim();
  const content = document.querySelector('#').value.trim();

  await fetch(`/api/post/${singleBlogID}`, {
    method: 'PUT',
    body: JSON.stringify({title, content}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};


const delClickFunction = function() {
  await fetch(`/api/post/${singleBlogID}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};




//Create Single Post
const buttonSection = $("<section>");
buttonSection.addClass("button-box");
const textButton = $("<button>").addClass("formButton").text("This is  a test text.");
buttonSection.append(textButton);

const textBox = $("<section>").addClass("main-box");
const textSection = $("<section").addClass("input-box");

const title = S("<p>").text("Edit Post");

const fieldDiv = $("<div>").addClass("field");
const innerFieldLabel = $("<label>").addClass("label").text("Title");
const innerFieldDiv = $("<div>").addClass("control");
const innerFieldInput = $("<input>").addClass("input").attr("type", "text");
innerFieldDiv.append(innerFieldInput);
fieldDiv.append(innerFieldDiv);
fieldDiv.append(innerFieldLabel);

const fieldDivTwo = $("<div>").addClass("field");
const innerFieldLabelTwo = $("<label>").addClass("label").text("Title");
const innerFieldDivTwo = $("<div>").addClass("control");
const innerFieldTextarea = $("<input>").addClass("textarea");
innerFieldDivTwo.append(innerFieldTextarea);
fieldDivTwo.append(innerFieldDivTwo)
fieldDivTwo.append(innerFieldLabelTwo);

const fieldDivThree = $("<div>").addClass("field is-grouped");
const innerFieldDivThree = $("<div>").addClass("control");
const innerFieldButtonOne = $("<button>").addClass("button is-link updatebutton").attr("id", "updatebutton");
const innerFieldButtonTwo = $("<div>").addClass("button is-link deletebutton").attr("id", "deletebutton")
innerFieldDivThree.append(innerFieldButtonOne);
innerFieldDivThree.append(innerFieldButtonTwo);
fieldDivThree.append(innerFieldDivThree);

textBox.append(textSection);
textSection.append(title)
textSection.append(fieldDiv);
textSection.append(fieldDivTwo);
textSection.append(fieldDivThree)

const singlePost = $("<div>").addClass(single-post);
singlePost.append(textBox);
singlePost.append(buttonSection);






