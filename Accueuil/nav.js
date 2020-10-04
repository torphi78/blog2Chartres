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