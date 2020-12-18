/**
 * 
 * HAMBURGER MENU
 *  
 */

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});