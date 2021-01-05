// navbar mobile

const navbarMobile = document.querySelector('.navbar-mobile');

// function open navbar

const openNavbar = () => {
    navbarMobile.classList.add('is-open');
}

// function close navbar

const closeNavbar = () => {
    navbarMobile.classList.remove('is-open');
}

// function scrool

const scrool = (e) => {
    let el = document.querySelector(`${e}`);
    el.scrollIntoView({
        behavior: 'smooth'
    });
}

// animation loading page 

const container = document.querySelector('.container');

const loadingAnimation = document.querySelector('.loading-animation-container');

const showContainer = () => {
    loadingAnimation.classList.add('hidden');
    container.classList.remove('hidden');
}

container.addEventListener('load', showContainer());

