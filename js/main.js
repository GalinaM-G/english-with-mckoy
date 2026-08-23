//sticky header
let scrollHeader = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        scrollHeader.classList.add('scroll');
    }
    else {
        scrollHeader.classList.remove('scroll');
    }
});


/*menu burger*/

//burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function closeMenu() {
    burger.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('lock');
}

burger.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


//current year for footer
let yearHtml = document.querySelector('#current-year');
yearHtml.textContent = new Date().getFullYear();
