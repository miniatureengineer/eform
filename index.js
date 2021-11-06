const isValidateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
};

const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector(
    'input[name="name"]'
);
const emailInput = document.querySelector(
    'input[name="email"]'
);
const phoneInput = document.querySelector(
    'input[name="phone"]'
);
const messageInput = document.querySelector(
    'textarea[name="message"]'
);

// Put inside single array input
const inputs = [
    nameInput,
    emailInput, 
    phoneInput, 
    messageInput,
];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
elm.classList.remove("invalid");
elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) =>{
// name box will display red
elm.classList.add("invalid");
elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!nameInput.value){
        isFormValid = false;
        invalidateElm(nameInput);
    }
    
    if (!isValidateEmail(emailInput.value)){
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if (!isValidatePhone(phoneInput.value)){
        isFormValid = false;
        invalidateElm(phoneInput);
    }

    if (!messageInput.value){
        isFormValid = false;
        invalidateElm(messageInput);
    }
};

// When submit the form can do something
form.addEventListener("submit", (e) => {
    // listen to the submit button so that the page will not display
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid){
        form.remove();
        // Display when remove the form
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach((input) => {
    
    input.addEventListener("input", () => {
        validateInputs();
    });
});