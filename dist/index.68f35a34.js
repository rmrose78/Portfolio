const modeSwitch_1 = document.getElementById("modeSwitch_1");
const modeSwitch_2 = document.getElementById("modeSwitch_2");
let theme = localStorage.getItem("theme");
const lightMode_theme = ()=>{
    modeSwitch_1.className = "fa fa-moon fa-nav-icon";
    modeSwitch_2.className = "fa fa-moon fa-menu-icon";
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("theme", "light");
};
const DarMode_theme = ()=>{
    modeSwitch_1.className = "fa fa-sun fa-nav-icon";
    modeSwitch_2.className = "fa fa-sun fa-menu-icon";
    document.documentElement.setAttribute("color-mode", null);
    localStorage.setItem("theme", "dark");
};
_c = DarMode_theme;
if (theme === "light") lightMode_theme();
modeSwitch_1.addEventListener("click", (e)=>{
    theme = localStorage.getItem("theme"); //update d
    if (theme === "dark") lightMode_theme();
    else DarMode_theme();
});
modeSwitch_2.addEventListener("click", (e)=>{
    theme = localStorage.getItem("theme"); //update d
    if (theme === "dark") lightMode_theme();
    else DarMode_theme();
});
var _c;
$RefreshReg$(_c, "DarMode_theme");

//# sourceMappingURL=index.68f35a34.js.map
