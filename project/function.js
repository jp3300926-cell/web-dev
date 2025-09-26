let popupmenu = document.getElementById("popup-menu");
let menubox = document.getElementById("popup-menu-box");
let changeicon= document.getElementById("change-icon");

function popup_menu() {
  if (popupmenu.style.width === "2vw") {
    popupmenu.style.width = "10.1vw";
    menubox.style.width = "8.1vw";
    changeicon.innerHTML = "×";
  } else {
    popupmenu.style.width = "2vw";
    menubox.style.width = "0";
    changeicon.innerHTML = "&#9776";
  }
}