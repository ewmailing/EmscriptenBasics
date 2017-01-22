#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

int main(int argc, char* argv[])
{
		//alert("hello world");
	EM_ASM(
		var button = document.createElement("button");
		button.innerHTML = "Do something";

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);

		button.addEventListener("click", function() { alert("did something"); });

	);
	return 0;
}

