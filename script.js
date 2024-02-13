// let day_night = document.querySelector(".day-night");
// let body = document.querySelector("body");

// // toggle dark/bright mode
// day_night.addEventListener("click", function() {
//     // toggle the class to the body
//     body.classList.toggle("dark");
//     // switch icons moon and sun
//     day_night.classList.toggle("active");
// })

// switch menu icon - show / hide menu
let menu_toggle = document.querySelector(".menu-toggle");
let nav = document.querySelector(".navigation")

menu_toggle.addEventListener("click", function(){
    // change menu icon when menu is open/closed
    menu_toggle.classList.toggle("active");
    // show the menu
    nav.classList.toggle("active");
})

// check for saved 'dark' in localStorage
let dark = localStorage.getItem("dark");

const btnDarkMode = document.querySelector(".day-night");

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add("dark");
    // 2. Update darkMode in localStorage
    localStorage.setItem("dark", "enabled");
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("dark");
    // 2. Update darkMode in localStorage 
    localStorage.setItem("dark", null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (dark === "enabled") {
    enableDarkMode();
    // change icon
    btnDarkMode.classList.add("active");
}

// When someone clicks the button
btnDarkMode.addEventListener("click", () => {

    // get their darkMode setting
    dark = localStorage.getItem("dark");

    // if it not current enabled, enable it
    if (dark !== "enabled") {
        enableDarkMode();
        btnDarkMode.classList.add("active");
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
        btnDarkMode.classList.remove("active");
    }
});