
var LibraryCommonGlobals = {

	$CommonGlobals : {
		counter: 0,
		dialogIDMap: {},
	},
}

mergeInto(LibraryCommonGlobals, '$CommonGlobals');
mergeInto(LibraryManager.library, LibraryCommonGlobals);

