(function() {
    let form = document.querySelector(".contact-form");
    let emailInput = document.querySelector("#contact-email");
    let telephoneInput = document.querySelector("#contact-tel");
    let messageInput = document.querySelector("#contact-msg");
    //error message function
    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error = container.querySelector(".error-message");
        if (error) container.removeChild(error);
        if (message) {
            let error = document.createElement("div");
            error.classList.add("error-message");
            error.innerText = message;
            container.appendChild(error);
        }
    }
    //email validation
    function validateEmail() {
        let value = emailInput.value;
        if (!value) {
            showErrorMessage(emailInput, "Email is a required field.");
            return false;
        }
        if (value.indexOf("@") === -1) {
            showErrorMessage(emailInput, "You must enter a valid email address");
            return false;
        }
        if (value.indexOf(".") === -1) {
            showErrorMessage(emailInput, "You must enter a valid email address");
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
    }
    //telephone validation
    function validateTelephone() {
        let tel = telephoneInput.value;
        let re = /\d{3}[\-]\d{3}[\-]\d{4}/gm;
        console.log(tel, "ok");
        if (!tel) {
            showErrorMessage(telephoneInput, "Phone number is a required field.");
            return false;
        }
        if (!tel.match(re)) {
            showErrorMessage(telephoneInput, "Please enter a valid phone number.");
            return false;
        }
        showErrorMessage(telephoneInput, null);
        return true;
    }
    //message validation
    function validateMessage() {
        let value = messageInput.value;
        if (!value) {
            showErrorMessage(messageInput, "Message is a required field.");
            return false;
        }
        if (value.length > 240) {
            showErrorMessage(messageInput, "Message exceeds maximum length.");
            return false;
        }
        if (value) showErrorMessage(messageInput, null);
        return true;
    }
    //form validation
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidTelephone = validateTelephone();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidTelephone && isValidMessage;
    }
    //showModal() with showDialog() for subscription button
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (validateForm()) alert("Thank you! We'll be in touch soon!");
    });
    emailInput.addEventListener("blur", validateEmail); //Error message showing after typing
    telephoneInput.addEventListener("blur", validateTelephone);
    messageInput.addEventListener("blur", validateMessage);
})();

//# sourceMappingURL=contact.09863fc6.js.map
