// Add task to list when enter/add item button is pressed
// Remove text from field when enter/add item button is pressed
// Remove task from list when completed

var inputField = document.getElementById("input-field");
var listItem = document.getElementsByClassName("todo-item");
var button = document.getElementById("submit-btn");


inputField.addEventListener("keyup", function() {
  if (event.keyCode === 13) { // keyCode === 13 enter key
    event.preventDefault();
    inputTask();
  }
});

button.addEventListener("click", inputTask);

function inputTask(event) {
  var li = document.createElement("LI"); // create li element
  li.classList.add("todo-item");
  var userInput = document.getElementById("input-field").value; // grab text from field
  var textNode = document.createTextNode(userInput); // create text node from user input
  li.appendChild(textNode); // append li element to text node
  document.getElementById("list").appendChild(li); // append new list item to ul
  inputField.value = ''; // clear text field after submit
  if (listItem.length > 0) { // check if list exist
    for (i = 0; i < listItem.length; i++) {
      listItem[i].setAttribute("id", i); // add unique id to each li
      listItem[i].addEventListener("click", deleteTask); // add click listener
    }
  }
  console.log(listItem);
}

// add EventListener to listItems
function deleteTask() {
  var item = document.getElementById(this.id);
  item.classList.add("completed");
  console.log(item);

}
