#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif
#include <stdio.h>
#include <stdbool.h>

extern int CreateTestButton(int dialog_id, const char* button_label);
extern void SetButtonCallback(int button_id);
extern void DestroyButton(int button_id);
extern int CreateDialog(void);

static _Bool s_createdExtraButton = false;
static int s_extraButtonID = 0;

static int s_mainWindowID = 0;

// EMSCRIPTEN_KEEPALIVE lets us avoid 
// -s EXPORTED_FUNCTIONS="['_NativeButtonCallbackTrampoline']"
// We also need -s NO_EXIT_RUNTIME=1 or Emscripten seems to shutdown
// when completes int main() since it doesn't block.
// Assertion failed: the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits) 
EMSCRIPTEN_KEEPALIVE void NativeButtonCallbackTrampoline(int button_id)
{
	// BUG: Emscripten isn't printing this once the main loop completes
	// (-s NO_EXIT_RUNTIME=1)
	printf("In NativeButtonCallbackTrampoline %d", button_id);

	if(s_createdExtraButton)
	{
		if(s_extraButtonID == button_id)
		{
			DestroyButton(button_id);
			s_extraButtonID = 0;
			s_createdExtraButton = false;
		}
	}
	else
	{
		int extra_button_id = CreateTestButton(s_mainWindowID, "Remove this Button");


		SetButtonCallback(extra_button_id);
		s_createdExtraButton = true;
		s_extraButtonID = extra_button_id;
	}
}

int main(int argc, char* argv[])
{
		//alert("hello world");
/*
	EM_ASM(
		var button = document.createElement("button");
		button.innerHTML = "Do something";

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);

		button.addEventListener("click", function() { alert("did something"); });

	);
*/
	int dialog_id = CreateDialog();
	s_mainWindowID = dialog_id;
	int button_id = CreateTestButton(dialog_id, "Add Button");
	printf("button_id: %d\n", button_id);


	SetButtonCallback(button_id);
	

	int dialog_id2 = CreateDialog();
	int button_id2 = CreateTestButton(dialog_id2, "Window 2 button");
	printf("button_id2: %d\n", button_id2);
	SetButtonCallback(button_id2);

	return 0;
}

