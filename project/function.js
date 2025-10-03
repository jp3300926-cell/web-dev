//popup side menu
let popupmenu = document.getElementById("popup-menu");
let menubox = document.getElementById("popup-menu-box");
let changeicon= document.getElementById("change-icon");

function popup_menu() {
  if (popupmenu.style.width === "5vw") {
    popupmenu.style.width = "23vw";
    menubox.style.width = "18vw";
    changeicon.innerHTML = "«";
  } else {
    popupmenu.style.width = "5vw";
    menubox.style.width = "0";
    changeicon.innerHTML = "&#9776";
  }
}

//side menu info
let contactinfo = document.getElementById("popup-contact");


let aboutinfo= document.getElementById("popup-about");


let teaminfo = document.getElementById("popup-team");


let learninfo = document.getElementById("popup-learn");

function popup_menu_contact() {
  if (contactinfo.style.height === "0px") {
    contactinfo.style.height = "90%";
    aboutinfo.style.height = "0";
    teaminfo.style.height = "0";
    learninfo.style.height = "0";
  } else {
    contactinfo.style.height = "0";
  }
}

function popup_menu_about() {
  if (aboutinfo.style.height === "0px") {
    contactinfo.style.height = "0";
    aboutinfo.style.height = "90%";
    teaminfo.style.height = "0";
    learninfo.style.height = "0";
  } else {
    aboutinfo.style.height = "0";
  }
}

function popup_menu_team() {
  if (teaminfo.style.height === "0px") {
    contactinfo.style.height = "0";
aboutinfo.style.height = "0";
teaminfo.style.height = "90%";
learninfo.style.height = "0";
  } else {
    teaminfo.style.height = "0";
  }
}

function popup_menu_learn() {
  if (learninfo.style.height === "0px") {
    contactinfo.style.height = "0";
aboutinfo.style.height = "0";
teaminfo.style.height = "0";
learninfo.style.height = "90%";
  } else {
    learninfo.style.height = "0";
  }
}

function info_menu_off() {
  contactinfo.style.height = "0";
aboutinfo.style.height = "0";
teaminfo.style.height = "0";
learninfo.style.height = "0";
}




