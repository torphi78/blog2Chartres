const burgerBtn = document.querySelector(".menuBurger");
let state = true;

burgerBtn.addEventListener('click', function(event){
    let toggleMenu = document.querySelector(".menu");
    let toggleDarkener = document.querySelector(".darkener");

    if(state === true) {
        toggleMenu.style.transform = "translateX(0)";
        toggleDarkener.style.display = "block";
        state = false;
    } else {
        toggleMenu.style.transform = "translateX(-100%)";
        toggleDarkener.style.display = "none";
        state = true;
    }
})