const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.header__menu-text');
const closeMenu = document.querySelector('.menu__close');
const menu_link = document.querySelector('ul.menu__navigation');
const links = menu_link.querySelectorAll('li');

window.onload = function () {
	TweenMax.to('.overlay-preloader-underline', 1, {
		delay: 0,
		width: "100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-text', 1.5, {
		delay: .5,
		y: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader', 1.5, {
		delay: 2,
		width: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-el01', 1.5, {
		delay: 2,
		right: "100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__heading h1', 2, {
		delay: 2,
		x: 0,
		stagger: .1,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__descriptions', 2, {
		delay: 2.7,
		y: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__video', 1.5, {
		delay: 3.5,
		width: "307px",
		ease: Expo.easeInOut
	})
	TweenMax.to('.header', 1.5, {
		delay: 3.5,
		y: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__bron-item', 1.5, {
		delay: 4.5,
		y: 0,
		stagger: .1,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__bron-btn', 1.5, {
		delay: 3.5,
		y: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__tabs-item-wrapper', .5, {
		delay: 5.2,
		x: 0,
		stagger: .2,
		ease: Expo.easeInOut
	})
};

var t1 = gsap.timeline({ paused: true });


t1.to(".overlay", {
	duration: 1.5,
	x: "0%",
	ease: 'expo.inOut'
});

t1.to(menu, {
	duration: 1,
	width: "100%",
	ease: 'expo.inOut'
});

t1.to(links, {
	duration: 1,
	opacity: 1,
	y: 0,
	stagger: 0.1,
	ease: 'expo.inOut'
}, "-=.5");

t1.to(".menu__close", {
	duration: 1,
	opacity: 1,
	y: 0,
	ease: 'expo.inOut'
});

btnMenu.addEventListener('click', () => {
	t1.play()
});

closeMenu.addEventListener('click', () => {
	t1.reverse()
});


const ideaSlider = new Swiper('.idea__content', {
	speed: 600,
	slidesPerView: 4,
	autoplay: {
		delay: 5000,
	}
});

const bronBtn = document.querySelector('.main__bron-btn');
const bronResult = document.querySelector('.main__result-wrapper');

var t2 = gsap.timeline({ paused: true });

t2.to(".main__result-wrapper", {
	duration: 1,
	width: "100%",
	ease: 'expo.inOut'
});

t2.to(".main__result-text", {
	duration: 1,
	y: 0,
	ease: 'expo.inOut'
});


t2.reverse();

bronBtn.addEventListener('click', () => {
	t2.reversed(!t2.reversed());
});


//let cloud = document.querySelector('.main__cloud')
let heading = document.querySelector('.main__heading');
let heading_01 = document.querySelector('#heading-01');
let heading_02 = document.querySelector('#heading-02');
let heading_03 = document.querySelector('#heading-03');

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	//cloud.style.top = value * .30 + -130 + 'px';
	heading.style.marginBottom = value * .30 + 122 + 'px';
	//heading.style.marginLeft = value * .30 + 'px';
	heading_01.style.marginLeft = value * .35 + 121 + 'px';
	heading_02.style.marginLeft = value * .32 + 'px';
	heading_03.style.marginLeft = value * .45 + 'px';
})

TweenMax.to('.idea__item-body', 2.3, {
	scrollTrigger: {
		trigger: ".idea",
		start: "top center"
	},
	y: 0,
	stagger: .1,
	ease: Expo.easeInOut
})

TweenMax.to('.feedback__image-wrapper', 1.5, {
	scrollTrigger: {
		trigger: ".feedback",
		start: "bottom bottom",
	},
	width: "476px",
	ease: Expo.easeInOut
})

TweenMax.to('.feedback__heading', 1.5, {
	scrollTrigger: {
		trigger: ".feedback",
		start: "bottom bottom",
	},
	y: 0,
	ease: Expo.easeInOut
})