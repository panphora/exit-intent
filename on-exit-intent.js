// Triggers once whenever the user intends to exit the page
// • Isn't aggressive: only triggers when mouse is near top of page
// • Addresses some Firefox bugs with INPUT and SELECT elements

(function () {
  function onExitIntent (exitIntentCallback) {
    initExitIntent(exitIntentCallback);
  }

  function initExitIntent (exitIntentCallback) {
    function onMouseOut(event) {
      let mouseNearTopOfPage = event.clientY < 20;
      let mouseDidntEnterAnotherElement = event.relatedTarget === null;
      let mouseEventIsNotInsideAnInputElement = event.target.nodeName.toLowerCase() !== "select" && event.target.nodeName.toLowerCase() !== "input"; 

      if (mouseNearTopOfPage && mouseDidntEnterAnotherElement && mouseEventIsNotInsideAnInputElement) {
        document.removeEventListener("mouseout", onMouseOut);
        if (exitIntentCallback) {
          exitIntentCallback();
        }
      }
    }

    document.addEventListener("mouseout", onMouseOut);
  }

  window.onExitIntent = onExitIntent;
})();