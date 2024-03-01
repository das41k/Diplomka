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
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
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
    spaceBetween: 5,
    slidesPerView: 1,
    navigation: {
        nextEl: '.reviews__button-next',
    },
    breakpoints: {
        650: {
            spaceBetween: 80,
        },
        600: {
            spaceBetween: 30,
        },
        400: {
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
