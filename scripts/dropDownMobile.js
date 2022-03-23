// TOGGLE MENU
const menu = document.querySelector("#menu-container");
let isShow = true;

function showHideMenu() {
  if (isShow) {
    menu.style.display = "none";
    isShow = false;
  } else {
    menu.style.display = "flex";
    isShow = true;
  }
}
