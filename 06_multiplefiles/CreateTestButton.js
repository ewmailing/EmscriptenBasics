

var LibraryCreateTestButton = {
	$MyGlobals__deps: ['$CommonGlobals', '$Dialog'],
	$MyGlobals: {
		g_counter: 0,
		g_objectIDMap: {},
	},


	CreateTestButton: function(dialog_id, button_label) {
		var button = document.createElement("button");
		//button.innerHTML = "Do something";
		button.innerHTML = Pointer_stringify(button_label);

		var dialog = Dialog.g_objectIDMap[dialog_id];
//		var body = document.getElementsByTagName("body")[0];
		var body = dialog.document.getElementsByTagName("body")[0];
		body.appendChild(button);


		CommonGlobals.counter++;
		console.log("global counter " + CommonGlobals.counter);


		MyGlobals.g_counter++;
		var current_id = MyGlobals.g_counter;
		MyGlobals.g_objectIDMap[current_id] = button;
		button.handleID = current_id;

//				var c_callback = Module.cwrap('NativeButtonCallbackTrampoline', null, ['number']);
//				c_callback(current_id);
		return current_id;

	},

	SetButtonCallback: function(handle_id) {

		var button = MyGlobals.g_objectIDMap[handle_id];
		if(button)
		{
			button.addEventListener("click", function() { 
				var c_callback = Module.cwrap('NativeButtonCallbackTrampoline', null, ['number']);
				c_callback(handle_id);
				alert("hi");

			});

		}

	},

	DestroyButton: function(handle_id) {
		var button = MyGlobals.g_objectIDMap[handle_id];
		if(button)
		{

			var parent_element = button.parentElement;
			parent_element.removeChild(button);
			MyGlobals.g_objectIDMap[handle_id] = null;
		}
	}


}

autoAddDeps(LibraryCreateTestButton, '$MyGlobals');
mergeInto(LibraryManager.library, LibraryCreateTestButton);

