let day_night = document.querySelector(".day-night");
let menu_toggle = document.querySelector(".menu-toggle");
let body = document.querySelector("body");
let nav = document.querySelector(".navigation")

day_night.addEventListener("click", function() {
    body.classList.toggle("dark");
    day_night.classList.toggle("active");
})

menu_toggle.addEventListener("click", function(){
    menu_toggle.classList.toggle("active");
    nav.classList.toggle("active");
})
