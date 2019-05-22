"use strict";

function allowNemIDPaste() {
  if (!document.URL.startsWith("https://applet.danid.dk")) {
    return;
  }

  let inputs = document.getElementsByTagName("input");

  // Wait for async loading of applet
  if (inputs.length == 0) {
    setTimeout(allowNemIDPaste, 100);
  }

  for (let input of inputs) {
    input.addEventListener(
      "paste",
      function(event) {
        input.value = event.clipboardData.getData("text");
      },
      true
    );
  }
}

setTimeout(allowNemIDPaste, 100);
