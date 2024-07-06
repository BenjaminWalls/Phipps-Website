
//import { setTimeout } from "timers/promises";
const initApp = () => {
const burger = document.querySelector('#burger');
const menu = document.querySelector('#mobile-menu');

//Burger Icon
burger.addEventListener('click', () => {
    //Add animation for burger.
    burger.classList.toggle('toggle-btn');
    //Add animation for mobile dropdown menu.
    menu.classList.toggle('animate-open-menu');
    //menu.classList.toggle('opacity-100');
    //menu.classList.toggle('pointer-events-none');
    //menu.classList.toggle('animate-close-menu');
    // Toggles hidden.
    menu.classList.toggle('hidden');

})

}
document.addEventListener('DOMContentLoaded', initApp)
