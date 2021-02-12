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

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("mail");