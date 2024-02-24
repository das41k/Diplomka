const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerIconTel = document.querySelector('.nav__burger-icon--telephone')
const burgerMenu = document.querySelector('.burger-menu')
const kak = document.querySelector('.kak')
const header = document.querySelector('.header')
burgerIcon.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('burger-menu--opened')) {
        burgerMenu.classList.add('burger-menu--opened')
        kak.classList.add('kak--closed')
    }
})
burgerIconTel.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('burger-menu--opened')) {
        burgerMenu.classList.add('burger-menu--opened')
        kak.classList.add('kak--closed')
        header.classList.add('header-menu--open')
    } else {
        burgerMenu.classList.remove('burger-menu--opened')
        kak.classList.remove('kak--closed')
        header.classList.remove('header-menu--open')
    }
})
const burgerMenuClose = document.querySelector('.burger-menu__cross')
burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--opened')
    kak.classList.remove('kak--closed')
})

const swiper = new Swiper('.gallery__swiper', {
    spaceBetween: 60,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 80,
        }
    }
});

const sipe = new Swiper('.reviews__swiper', {
    spaceBetween: 80,
    slidesPerView: 2,
    navigation: {
        nextEl: '.reviews__button-next',
    },
});

const accordionLists = document.querySelectorAll(".accordion-list");
accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && (accordionItem != accordionOpenedItem)) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }

        accordionItem.classList.toggle('accordion-list__item--opened');
        
        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    })
})