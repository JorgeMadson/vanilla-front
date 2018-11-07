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
        return e.target.style.borderColor = correctInputColor(isPassStrength(e.target.value));
    }
    function nameFilled(e) {
        return e.target.style.borderColor = correctInputColor(true);
    }
    function validateEmail(e) {
        return e.target.style.borderColor = correctInputColor(isValidEmail(e.target.value));
    }
    function confirmPass(e) {
        return e.target.style.borderColor = correctInputColor(e.target.value === $passInput.value);
    }
    function isPassStrength(pass) {
        return /^.{6,}$/.test(pass) && /\w/.test(pass) && /\d/.test(pass);
    }
    function isValidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/m.test(email);
    }
    function correctInputColor(valid) {
        if (valid)
            return '#17D499';
        return '';
    }
}
)();