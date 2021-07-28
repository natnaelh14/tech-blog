let textButton = document.querySelectorAll("#formButton");
let form = document.querySelector(".input-box");
// const singleBlogID = document.querySelector('input[name="post-id"]').value;


// $(document).on("click", ".formButton", function (e) {
//     e.preventDefault();
//    $(e.currentTarget).toggleClass

// });

var elements = document.getElementsByClassName("formButton");
// console.log(elements)
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click",function(event) {

    let test = document.getElementsByClassName("main-box")
    var index = parseInt(event.target.id);
    if(test[index].style.display === "none") {
      test[index].style.display = "block"
    } else {
      test[index].style.display = "none"
    }
  })
}


$(document).on("click", ".update-button", function (e) {
  const test = $(this).closest('.text-section').find('.textarea').val();
  console.log(test)
});

// document.querySelector('#deletebutton').addEventListener('click', delClickFunction);

// const updateClickFunction = function(e) {
//   const title = document.querySelector('#input').value.trim();
//   const content = document.querySelector('#input').value.trim();

//   await fetch(`/api/post/${singleBlogID}`, {
//     method: 'PUT',
//     body: JSON.stringify({title, content}),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   document.location.replace('/dashboard');
// };
// document.querySelector('#update-button').addEventListener('click', updateClickFunction);


// const delClickFunction = function() {
//   await fetch(`/api/post/${singleBlogID}`, {
//     method: 'DELETE'
//   });

//   document.location.replace('/dashboard');
// };




//Create Single Post
// const buttonSection = $("<section>");
// buttonSection.addClass("button-box");
// const textButton = $("<button>").addClass("formButton").text("This is  a test text.");
// buttonSection.append(textButton);

// const textBox = $("<section>").addClass("main-box");
// const textSection = $("<section").addClass("input-box");

// const title = S("<p>").text("Edit Post");

// const fieldDiv = $("<div>").addClass("field");
// const innerFieldLabel = $("<label>").addClass("label").text("Title");
// const innerFieldDiv = $("<div>").addClass("control");
// const innerFieldInput = $("<input>").addClass("input").attr("type", "text");
// innerFieldDiv.append(innerFieldInput);
// fieldDiv.append(innerFieldDiv);
// fieldDiv.append(innerFieldLabel);

// const fieldDivTwo = $("<div>").addClass("field");
// const innerFieldLabelTwo = $("<label>").addClass("label").text("Title");
// const innerFieldDivTwo = $("<div>").addClass("control");
// const innerFieldTextarea = $("<input>").addClass("textarea");
// innerFieldDivTwo.append(innerFieldTextarea);
// fieldDivTwo.append(innerFieldDivTwo)
// fieldDivTwo.append(innerFieldLabelTwo);

// const fieldDivThree = $("<div>").addClass("field is-grouped");
// const innerFieldDivThree = $("<div>").addClass("control");
// const innerFieldButtonOne = $("<button>").addClass("button is-link updatebutton").attr("id", "updatebutton");
// const innerFieldButtonTwo = $("<div>").addClass("button is-link deletebutton").attr("id", "deletebutton")
// innerFieldDivThree.append(innerFieldButtonOne);
// innerFieldDivThree.append(innerFieldButtonTwo);
// fieldDivThree.append(innerFieldDivThree);

// textBox.append(textSection);
// textSection.append(title)
// textSection.append(fieldDiv);
// textSection.append(fieldDivTwo);
// textSection.append(fieldDivThree)

// const singlePost = $("<div>").addClass(single-post);
// singlePost.append(textBox);
// singlePost.append(buttonSection);






