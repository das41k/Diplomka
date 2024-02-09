const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerMenu = document.querySelector('.burger-menu')
const kak = document.querySelector('.kak')
burgerIcon.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('burger-menu--opened')) {
        burgerMenu.classList.add('burger-menu--opened')
        kak.classList.add('kak--closed')
    }
})
const burgerMenuClose = document.querySelector('.burger-menu__cross')
burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--opened')
    kak.classList.remove('kak--closed')
})

const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
    spaceBeetwen: 26,
    slidesPerViev: 2,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper__button-next',
        prevEl: '.swiper__button-prev',
    },
});