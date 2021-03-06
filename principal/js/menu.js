const btnMobile = document.querySelector('.header_nav_btn');
const navlinks = document.querySelectorAll('.header_nav_list_link');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.header_nav');
    const header = document.querySelector('.header');

    header.classList.toggle('active');
    header.classList.toggle('not_active');
    nav.classList.toggle('active');
    nav.classList.toggle('not_active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", toggleMenu);
}
