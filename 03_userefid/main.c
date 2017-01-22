#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif
#include <stdio.h>

extern int CreateTestButton(void);
extern void SetButtonCallback(int button_id);

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
	int button_id = CreateTestButton();
	printf("button_id: %d\n", button_id);


	SetButtonCallback(button_id);
	

/*
	int button_id2 = CreateTestButton();
	printf("button_id2: %d\n", button_id2);
*/
	return 0;
}

