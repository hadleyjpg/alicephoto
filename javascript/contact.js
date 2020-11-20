/**
 * 
 * VALIDATORS
 *  
 */

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
 */

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
    /*showOrHideTip(showTip, tooltip);*/
};
};

phoneInput.addEventListener("input", createListener(isValidTelephone));

phoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value);
});

emailInput.addEventListener("input", createListener(isValidEmail));



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