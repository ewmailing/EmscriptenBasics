#!/bin/sh
emcc main.c --js-library CommonGlobals.js --js-library CreateTestButton.js --js-library CreateDialog.js -s NO_EXIT_RUNTIME=1 -o hello.html
