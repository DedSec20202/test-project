const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav__button');
const navButtonImg = document.querySelector('#nav__button__img');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navButtonImg.src = './img/icons/nav-close.svg';
    } else {
        navButtonImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init({
    once: true
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}