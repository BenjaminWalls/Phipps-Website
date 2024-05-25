const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('hidden');
    //document.querySelector('#burger').classList.toggle('hidden');
})