#!/bin/sh
emcc main.c --js-library CreateTestButton.js -s NO_EXIT_RUNTIME=1 -o hello.html
