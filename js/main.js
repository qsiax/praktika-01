const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.header__menu-text');
const closeMenu = document.querySelector('.menu__close');
const menu_link = document.querySelector('ul.menu__navigation');
const links = menu_link.querySelectorAll('li');

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
})

closeMenu.addEventListener('click', () => {
    t1.reverse()
})