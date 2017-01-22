
/*
function CreateTestButton() {

	var button = document.createElement("button");
	button.innerHTML = "Do something";

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);

	button.addEventListener("click", function() { alert("did something"); });

}

mergeInto(LibraryManager.library, CreateTestButton);
*/

mergeInto(LibraryManager.library, {
	CreateTestButton: function() {
		var button = document.createElement("button");
		button.innerHTML = "Do something";

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);

		button.addEventListener("click", function() { alert("did something"); });

	},
});

