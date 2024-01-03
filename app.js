// selecting HTML elements
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");


// Regular expression for email validation
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Flag to track the validity of the email
let isValid = false;

form.addEventListener("submit", handelForm);

// Function to handle form submission
function handelForm(e) {
   // Prevent the default form submission behavior
  e.preventDefault();
   // Call the function to handle email validation
  handelEmail();
  // If the email is valid, proceed with the form submission
  if (isValid) form.submit();
}

function handelEmail() {
   // Get and trim the value of the email input
  const emailValue = emailInput.value.trim();
  // Error message for invalid email
  const ERROR = "please provide a valid email";
  // Default placeholder for the email input
  const PLACEHOLDER = "Email Address";
  
  // Reset error state after a delay
  setTimeout(() => {
    errorMessage.textContent = "";
    emailInput.classList.remove("border");
    errorIcon.classList.remove("block");
    emailInput.placeholder = PLACEHOLDER;
  }, 5000);

  // Assume email is valid by default
  isValid = true;

  // Check if the email value does not match the regular expression
  if (!emailReg.test(emailValue)) {
    errorMessage.textContent = ERROR;
    emailInput.classList.add("border");
    errorIcon.classList.add("block");
    emailInput.placeholder = "example@gmail.com";
  }
}