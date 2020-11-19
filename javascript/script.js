const nameInput = document.getElementById("#name");
const phoneInput = document.getElementById("#phone");
const emailInput = document.getElementById("#mail");

/**
 * 
 * VALIDATORS
 *  
 

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(phone) {
    return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(phone);
}

// Must be a valid email address
function isValidEmail(mail) {
return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 

function formatTelephone(text) {
    const expression = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
    return text.replace(expression, "($1) $2-$3");
  }

function createListener(validator) {
return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
};
};

phoneInput.addEventListener("input", createListener(isValidTelephone));

phoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));


/**
 * 
 * Lightbox Gallery
 *  
 

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




/**
 * 
 * Countdown
 *  
 

const finaleDate = new Date("March 19, 2022 12:30:00").getTime();

const timer = () =>{
    const now = new Date().getTime();
    let diff = finaleDate - now;
    if(diff < 0){
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.countdown-container').style.display = 'none';
    }

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
    let seconds = Math.floor(diff % (1000*60) / 1000);

    days <= 99 ? days = `0${days}` : days;
    days <= 9 ? days = `00${days}` : days;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;   

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;

}
timer();
setInterval(timer,1000);






/**
 * 
 * Form to TXT
 *  
 */

let saveFile = () => {
    	
  // Get the data from each element on the form.
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
  
  // This variable stores all the data.
  let data = 
      '\r Name: ' + name.value + ' \r\n ' + 
      'Phone: ' +phone.value + ' \r\n ' + 
      'Email: ' + mail.value + ' \r\n ' +  
      'Message: ' + message.value;
  
  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'formData.txt';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
  }

  newLink.click(); 
}







/**
 * 
 * INSTAGRAM
 *  
 

const instaContainer = document.querySelector('.insta-container'); 

fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJWUDNMVjZA4anNzNmZAPUm5oUm5RNWNGSndmdlhLNHRvRmRLa1R3OW1zSEtRWHlaUEVqWGdveVl6VUV2aTVYM2E3SXZAVU1VIeENFSE9TUlh4ZA2VLdWJwcU1iOHNrTmFPRW5vVXZA3')
  .then(response => response.json())
  .then(data => generateImage(data.media_url))

  function generateImage(data) {
      const html = `
        <img src="${data}" width="200px" height="200px">
      `;
      instaContainer.innerHtml = html;
  } */


 