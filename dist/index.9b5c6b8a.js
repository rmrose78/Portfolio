const hamburgerContainer=document.getElementById("hamburger-ctr"),menuLinks=document.querySelectorAll("menu-link"),homeLink=document.getElementById("home-link"),aboutLink=document.getElementById("about-link"),contactLink=document.getElementById("contact-link"),navSideContainer=document.getElementById("nav-insideContainer"),logoName=document.getElementById("logo-name"),hamburger=document.getElementById("nav-icon4"),navLinkHome=document.getElementById("nav--link-home"),navLinkAbout=document.getElementById("nav--link-about"),navLinkContact=document.getElementById("nav--link-contact"),navLinkLinkedin=document.getElementById("fa-linkedin-id"),navLinkGithub=document.getElementById("fa-github-id"),menuToggle=()=>{document.getElementById("menu-container").classList.toggle("show"),document.getElementById("nav").classList.toggle("transparent"),hamburger.classList.toggle("open")};navSideHideAtTopOfPage=()=>{let e=window.scrollY>0;navSideContainer.classList.toggle("nav-insideContainer-active",e),logoName.classList.toggle("logo-hide",e),navSideContainer.classList.toggle("navbar-contents-acitve",e),navLinkHome.classList.toggle("nav--link-textColor-active",e),navLinkAbout.classList.toggle("nav--link-textColor-active",e),navLinkContact.classList.toggle("nav--link-textColor-active",e),navLinkLinkedin.classList.toggle("nav--link-textColor-active",e),navLinkGithub.classList.toggle("nav--link-textColor-active",e)};const navSideShowHover=()=>{0==window.scrollY&&(console.log("i'm triggered"),navSideContainer.classList.toggle("nav-insideContainer-active"),logoName.classList.toggle("logo-hide"),navSideContainer.classList.toggle("navbar-contents-acitve"),navLinkHome.classList.toggle("nav--link-textColor-active"),navLinkAbout.classList.toggle("nav--link-textColor-active"),navLinkContact.classList.toggle("nav--link-textColor-active"),navLinkLinkedin.classList.toggle("nav--link-textColor-active"),navLinkGithub.classList.toggle("nav--link-textColor-active"))};menuLinks.forEach((e=>{e.addEventListener("click",menuToggle)})),hamburger.addEventListener("click",menuToggle),homeLink.addEventListener("click",menuToggle),aboutLink.addEventListener("click",menuToggle),contactLink.addEventListener("click",menuToggle),window.addEventListener("scroll",navSideHideAtTopOfPage),navSideContainer.addEventListener("mouseenter",navSideShowHover),navSideContainer.addEventListener("mouseleave",navSideShowHover);
//# sourceMappingURL=index.9b5c6b8a.js.map
