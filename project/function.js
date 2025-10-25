let phone_media = window.matchMedia("(max-width: 600px)")
//popup side menu
let popupmenu = document.getElementById("popup-menu");
let menubox = document.getElementById("popup-menu-box");
let changeicon= document.getElementById("change-icon");
let push= document.getElementById("push_content");

function popup_menu() {

  if (phone_media) {
    // mobile 
    if (popupmenu.style.width === "5vw") {
      popupmenu.style.width = "70vw";
      menubox.style.width = "68vw";
      changeicon.innerHTML = "«";
      if (push) {
        push.style.width = "30vw";
      }
    } else {
      popupmenu.style.width = "5vw";
      menubox.style.width = "0";
      changeicon.innerHTML = "&#9776;";
      if (push) {
        push.style.width = "95vw";
      }
    }

  } else {
    // desktop 
    if (popupmenu.style.width === "2.5vw") {
      popupmenu.style.width = "20.6vw";
      menubox.style.width = "18vw";
      changeicon.innerHTML = "«";
      if (push) {
        push.style.width = "77vw";
      }
    } else {
      popupmenu.style.width = "2.5vw";
      menubox.style.width = "0";
      changeicon.innerHTML = "&#9776;";
      if (push) {
        push.style.width = "95vw";
      }
    }
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
