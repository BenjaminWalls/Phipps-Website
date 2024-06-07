
const initApp = () => {
const burger = document.querySelector('#burger');
const menu = document.querySelector('#mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle-btn');
    menu.classList.toggle('animate-open-menu');
    menu.classList.toggle('opacity-100');

})

}
document.addEventListener('DOMContentLoaded', initApp)