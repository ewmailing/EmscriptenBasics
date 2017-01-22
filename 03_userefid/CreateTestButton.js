

var LibraryCreateTestButton = {
	$MyGlobals: {
		g_counter: 0,
		g_objectIDMap: {},
	},


	CreateTestButton: function() {
		var button = document.createElement("button");
		button.innerHTML = "Do something";

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);



		MyGlobals.g_counter++;
		var current_id = MyGlobals.g_counter;
		MyGlobals.g_objectIDMap[current_id] = button;
		button.handleID = current_id;

		return current_id;

	},

	SetButtonCallback: function(handle_id) {

		var button = MyGlobals.g_objectIDMap[handle_id];
		if(button)
		{
			button.addEventListener("click", function() { alert("did something: " + button.handleID); });

		}

	},


}

autoAddDeps(LibraryCreateTestButton, '$MyGlobals');
mergeInto(LibraryManager.library, LibraryCreateTestButton);

