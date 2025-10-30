let phone_media = window.matchMedia("(max-width: 600px)")
//popup side menu
let popupmenu = document.getElementById("popup-menu");
let menubox = document.getElementById("popup-menu-box");

let changeicon= document.getElementById("change-icon");
let push= document.getElementById("push_content");

function popup_menu() {

  if (phone_media.matches) {
    // mobile 
    if (popupmenu.style.width === "7.5vw") {
      popupmenu.style.width = "75.6vw";
      menubox.style.width = "68vw";
      changeicon.innerHTML = "«";
      
    } else {
      popupmenu.style.width = "7.5vw";
      menubox.style.width = "0";
      changeicon.innerHTML = "&#9776;";
      
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
        push.style.width = "100vw";
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

//all side menu close
function info_menu_off() {
contactinfo.style.height = "0";
aboutinfo.style.height = "0";
teaminfo.style.height = "0";
learninfo.style.height = "0";
}

// Debugging block
console.log("=== Debugging Popup Menu ===");

// Check if media query is working
console.log("Window width:", window.innerWidth);
console.log("Is mobile (max-width: 600px):", phone_media.matches);





// Check current styles
console.log("popupmenu width:", popupmenu.style.width);
console.log("menubox width:", menubox.style.width);
console.log("changeicon innerHTML:", changeicon.innerHTML);
console.log("push width:", push ? push.style.width : "push not defined");

console.log("contactinfo height:", contactinfo.style.height);
console.log("aboutinfo height:", aboutinfo.style.height);
console.log("teaminfo height:", teaminfo.style.height);
console.log("learninfo height:", learninfo.style.height);