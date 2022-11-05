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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		
		const goto = anchor.hasAttribute('href')
			? anchor.getAttribute('href')
			: 'body';
		
		document.querySelector(goto).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		
		if (nav.classList.contains('open')) {
			nav.classList.remove('open');
			navButtonImg.src = './img/icons/nav-open.svg';
		}
	});
}

AOS.init({
    once: true
});
