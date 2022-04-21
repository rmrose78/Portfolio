const hamburgerContainer = document.getElementById("hamburger-ctr");
const menuLinks = document.querySelectorAll("menu-link");
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const navSideContainer = document.getElementById("nav-insideContainer");
const logoName = document.getElementById("logo-name");
const hamburger = document.getElementById("nav-icon4");

// TOGGLE MENU

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("open");
//   document.getElementById("menu-container").classList.toggle("show");
//   document.getElementById("nav").classList.toggle("transparent");
//   document.getElementById("logo-r").classList.toggle("logo-change");
// });

function menuToggle() {
  document.getElementById("menu-container").classList.toggle("show");
  document.getElementById("nav").classList.toggle("transparent");
  document.getElementById("logo-r").classList.toggle("logo-change");
  // hamburger.classList.toggle("open");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", menuToggle);
});

hamburger.addEventListener("click", menuToggle);
// hamburger.addEventListener("key: 13", menuToggle);
homeLink.addEventListener("click", menuToggle);
aboutLink.addEventListener("click", menuToggle);
contactLink.addEventListener("click", menuToggle);

// Top scroll navbar
const navLinkHome = document.getElementById("nav--link-home");
const navLinkAbout = document.getElementById("nav--link-about");
const navLinkContact = document.getElementById("nav--link-contact");
const navLinkLinkedin = document.getElementById("fa-linkedin-id");
const navLinkGithub = document.getElementById("fa-github-id");

window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;

  navSideContainer.classList.toggle(
    "nav-insideContainer-active",
    windowPosition
  );
  logoName.classList.toggle("logo-hide", windowPosition);
  navSideContainer.classList.toggle("navbar-contents-acitve", windowPosition);

  navLinkHome.classList.toggle("nav--link-textColor-active", windowPosition);
  navLinkAbout.classList.toggle("nav--link-textColor-active", windowPosition);
  navLinkContact.classList.toggle("nav--link-textColor-active", windowPosition);
  navLinkLinkedin.classList.toggle(
    "nav--link-textColor-active",
    windowPosition
  );
  navLinkGithub.classList.toggle("nav--link-textColor-active", windowPosition);
});

navSideContainer.addEventListener("hover", function () {
  let windowPosition = window.scrollY > 0;

  navSideContainer.classList.toggle(
    "nav-insideContainer-active",
    windowPosition
  );
  logoName.classList.toggle("logo-hide", windowPosition);
  navSideContainer.classList.toggle("navbar-contents-acitve");

  navLinkHome.classList.toggle("nav--link-textColor-active");
  navLinkAbout.classList.toggle("nav--link-textColor-active");
  navLinkContact.classList.toggle("nav--link-textColor-active");
  navLinkLinkedin.classList.toggle("nav--link-textColor-active");
  navLinkGithub.classList.toggle("nav--link-textColor-active");
});
