

var LibraryCreateDialog = {
	$Dialog__deps: ['$CommonGlobals'],
	$Dialog: {
		g_counter: 0,
		g_objectIDMap: {},
	},


	CreateDialog: function() {

		var dialog;


		CommonGlobals.counter++;
		console.log("global counter " + CommonGlobals.counter);


		Dialog.g_counter++;
		var current_id = Dialog.g_counter;

		if(current_id <= 1)
		{
			//dialog = document.getElementsByTagName("body")[0];
			dialog = window.self;
		}
		else
		{
			dialog = window.open();
		}

		Dialog.g_objectIDMap[current_id] = dialog;

		dialog.handleID = current_id;

		return current_id;

	},


	DestroyDialog: function(handle_id) {
		var dialog = Dialog.g_objectIDMap[handle_id];
		if(dialog)
		{

			dialog.close();
			Dialog.g_objectIDMap[handle_id] = null;
		}
	}


}

autoAddDeps(LibraryCreateDialog, '$Dialog');
mergeInto(LibraryManager.library, LibraryCreateDialog);

