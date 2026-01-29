const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list__item');


burger.addEventListener('click', () => {
    // console.log('click');
    menu.classList.add('menu-active');
})

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    })  
})

document.addEventListener('click', (event) => {

    if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
        //console.log('mobile menu');
        menu.classList.remove('menu-active');
    } 
    // else {
    //     console.log('past');
    // }
});