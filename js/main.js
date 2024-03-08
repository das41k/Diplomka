const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerIconTel = document.querySelector('.nav__burger-icon--telephone')
const burgerMenu = document.querySelector('.burger-menu')
const kak = document.querySelector('.kak')
const header = document.querySelector('.header')
const acti = document.querySelector('.telephone__acti')
const titleMobile = document.querySelector('.title-mobile')
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
        acti.classList.add('telephone__acti--closed')
        titleMobile.classList.add('title-mobile--active')
    } else {
        burgerMenu.classList.remove('burger-menu--opened')
        kak.classList.remove('kak--closed')
        header.classList.remove('header-menu--open')
        acti.classList.remove('telephone__acti--closed')
        titleMobile.classList.remove('title-mobile--active')
    }
})
const burgerMenuClose = document.querySelector('.burger-menu__cross')
burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--opened')
    kak.classList.remove('kak--closed')
})

const swiper = new Swiper('.gallery__swiper', {
    spaceBetween: 60,
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 80,
        },
        550: {
            slidesPerView: 3,
        }
    }
});

const sipe = new Swiper('.reviews__swiper', {
    spaceBetween: 15,
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
    },
    breakpoints: {
        1100: {
            spaceBetween: 80,
            slidesPerView: 2, 
        }
    }
});

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});

const messageIcon = document.querySelector('.buttons-message');
const messageMenu = document.querySelector('.message');
const messageMenuClose = document.querySelector('.message__close');
messageIcon.addEventListener('click', () => {
    if (!messageMenu.classList.contains('message-open')) {
        messageMenu.classList.add('message-open');
        messageIcon.classList.add('buttons-message--close')
    }
})
messageMenuClose.addEventListener('click', () => {
    if (messageMenu.classList.contains('message-open')) {
        messageMenu.classList.remove('message-open');
        messageIcon.classList.remove('buttons-message--close')
    }
})

const ModalButton = document.querySelector('.reviews__add')
const Modal = document.querySelector('.modal')
ModalButton.addEventListener('click', OpenModal)
Modal.addEventListener('click', closeModal)
function OpenModal(e) {
    document.body.classList.toggle('body-modal--opened')
}
function closeModal(e) {
    e.preventDefault
    const target = e.target
    if (target.classList.contains('modal__close') || target.classList.contains('modal')) {
        document.body.classList.remove('body-modal--opened')
    }
}
const swiperHero = new Swiper('.hero__swiper-mobile', {
    spaceBetween: 24,
    slidesPerView: 2,
    navigation: {
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
        }
    }
});


const accordionListsMob = document.querySelectorAll('.accordion-footer__list');

accordionListsMob.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionControlMob = e.target.closest('.accordion-footer__control');
        if (!accordionControlMob) return
        const accordionItemMob = accordionControlMob.parentElement;
        const accordionContentMob = accordionControlMob.nextElementSibling;

        accordionItemMob.classList.toggle('accordion-list__item--opened');

        if (accordionItemMob.classList.contains('accordion-list__item--opened')) {
            accordionContentMob.style.maxHeight = accordionContentMob.scrollHeight + 'px';
        } else {
            accordionContentMob.style.maxHeight = null;
        }

    });

});
