const burgerBtn = document.querySelector(".menuBurger");
let state = true;

burgerBtn.addEventListener('click', function(event){
    let toggleMenu = document.querySelector(".menu");

    if(state === true) {
        toggleMenu.style.transform = "translateX(0)";
        state = false;
    } else {
        toggleMenu.style.transform = "translateX(-100%)";
        state = true;
    }
})

let prevScrollPos = window.pageYOffset;
const navBar = document.querySelector('.navBar');

window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    let toggleMenu = document.querySelector(".menu");
    if(prevScrollPos > currentScrollPos) {
        navBar.style.transform = "translateY(0)";


    } else {
        navBar.style.transform = "translateY(-100%)";
        toggleMenu.style.transform = "translateX(-100%)";

    }
    prevScrollPos = currentScrollPos;
}