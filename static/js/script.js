const burgerMenu = document.querySelector(".burger-menu-closed");
const burgerMenuOpend = document.querySelector(".burger-menu-opened");
burgerMenu.addEventListener("click", function(){
    console.log(5);
    burgerMenuOpend.classList.toggle("active-burger");
});