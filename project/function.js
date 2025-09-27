let popupmenu = document.getElementById("popup-menu");
let menubox = document.getElementById("popup-menu-box");
let changeicon= document.getElementById("change-icon");

function popup_menu() {
  if (popupmenu.style.width === "5vw") {
    popupmenu.style.width = "23vw";
    menubox.style.width = "18vw";
    changeicon.innerHTML = "X";
  } else {
    popupmenu.style.width = "5vw";
    menubox.style.width = "0";
    changeicon.innerHTML = "&#9776";
  }
}