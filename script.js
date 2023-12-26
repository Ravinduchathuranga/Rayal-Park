const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnClose = document.querySelector("i");

menuBtn.addEventListener(("click"), () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnClose.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener(("click"), () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevaelOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000
}

ScrollReveal().reveal(".header_container p", {
   ...scrollRevaelOptions,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevaelOptions,
    delay: 500,
});

