// Add task to list when enter/add item button is pressed
// Remove text from field when enter/add item button is pressed
// Remove task from list when completed


var inputField = document.getElementById("input-field");

inputField.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) { // keyCode === 13 enter key
		document.querySelector("button").click(); // simulate mouse click if "enter" button is pressed
    var listItem = document.createElement("LI"); // create li element
		var userInput = document.getElementById("input-field").value; // grab text from field
    var textNode = document.createTextNode(userInput); // create text node from user input
    listItem.appendChild(textNode); // append li element to text node
    document.getElementById("list").appendChild(listItem); // append new list item to ul
    inputField.value = ''; // clear text field after submit
	}
});
