(function () {
    'use strict';
    //Inputs
    var $nameInput = document.querySelector('[data-js="name"]');
    var $emailInput = document.querySelector('[data-js="email"]');
    var $passInput = document.querySelector('[data-js="password"]');
    var $passconfirmInput = document.querySelector('[data-js="password-confirm"]');
    
    //Events
    $passInput.addEventListener('input', passStrength, false);
    $nameInput.addEventListener('input', nameFilled, false);
    $emailInput.addEventListener('input', validateEmail, false);
    $passconfirmInput.addEventListener('input', confirmPass, false);
    
    //Functions
    function passStrength(e) {
        if (isPassStrength(e.target.value))
            return e.target.style.borderColor = correctInputColor();
    }
    function nameFilled(e) {
        return e.target.style.borderColor = correctInputColor();
    }
    function validateEmail(e) {
        if (isValidEmail(e.target.value))
            return e.target.style.borderColor = correctInputColor();
    }
    function confirmPass(e) {
        if (e.target.value === $passInput.value)
            return e.target.style.borderColor = correctInputColor();
        return e.target.style.borderColor = '';
    }
    function isPassStrength(pass) {
        return /^.{6,}$/.test(pass) && /\w/.test(pass) && /\d/.test(pass);
    }
    function isValidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/m.test(email);
    }
    function correctInputColor() {
        return "#17D499";
    }
}
)();