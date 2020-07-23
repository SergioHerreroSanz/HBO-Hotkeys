document.addEventListener("keydown", function (e) {
  var clase;

  switch (e.keyCode) {
    case 32:
      //Space (play/pause)
      clase = "vjs-play-control";
      break;
    case 13:
      //Enter (play/pause)
      clase = "vjs-play-control";
      break;
    case 77:
      //M key (mute)
      clase = "vjs-volume-menu-button";
      break;
    case 70:
      //F key (fullscreen)
      clase = "vjs-fullscreen-control";
      break;
    case 37:
      //Left arrow (backward)
      clase = "backward-button";
      break;
    case 39:
      //Right arrow (forward)
      clase = "forward-button";
      break;
    case 38:
      //Up arrow (volume up)
      clase = "vjs-volume-bar";
    case 40:
      //Down arrow (volume down)
      clase = "vjs-volume-bar";
      break;
    default:
      console.debug(e);
      break;
  }

  var element = document.getElementsByClassName(clase);
  if (element != undefined && element.length > 0) {
    console.debug(element);
    element[0].click();
  }
});
