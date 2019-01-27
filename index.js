// Add task to list when enter/add item button is pressed
// Remove text from field when enter/add item button is pressed
// Remove task from list when completed


var inputField = document.getElementById("input-field");
var listItem = document.getElementsByClassName("todo-item");

inputField.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) { // keyCode === 13 enter key
    document.querySelector("button").click(); // simulate mouse click if "enter" button is pressed
    var li = document.createElement("LI"); // create li element
    li.classList.add("todo-item");
    var userInput = document.getElementById("input-field").value; // grab text from field
    var textNode = document.createTextNode(userInput); // create text node from user input
    li.appendChild(textNode); // append li element to text node
    document.getElementById("list").appendChild(li); // append new list item to ul
    inputField.value = ''; // clear text field after submit
    if (listItem.length > 0) {
      for (var i = 0; i < listItem.length; i++) {
        listItem[i].classList.add("-" + i);
        listItem[i].addEventListener("click", deleteTask);
      }
    }
    console.log(listItem);
  }
});

// add EventListener to listItems
function deleteTask () {
  alert("I was clicked");
}
