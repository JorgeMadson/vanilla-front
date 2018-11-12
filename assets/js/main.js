(function (document) {
    'use strict';
    //Inputs
    var $nameInput = document.querySelector('[data-js="name"]');
    var $emailInput = document.querySelector('[data-js="email"]');
    var $passInput = document.querySelector('[data-js="password"]');
    var $passconfirmInput = document.querySelector('[data-js="password-confirm"]');
    var $createAccButton = document.querySelector('[data-js="button"]');
    var $passHas6carac = document.querySelector('[data-js="passHas6carac"]');
    var $passHasLetter = document.querySelector('[data-js="passHasLetter"]');
    var $passHasNumber = document.querySelector('[data-js="passHasNumber"]');

    //Consts css colors for validation
    const green = '#17D499';
    const orange = '#F7BC1C';
    const red = '#F79682';

    //Events
    $passInput.addEventListener('input', passStrength, false);
    $nameInput.addEventListener('input', nameEntered, false);
    $emailInput.addEventListener('input', validateEmail, false);
    $passconfirmInput.addEventListener('input', confirmPass, false);
    $createAccButton.addEventListener('click', enableButton, false);

    //Functions
    function passHas6carac(pass){
        return /^.{6,}$/.test(pass);
    }
    function passHasLetter(pass){
        return /\w/.test(pass);
    }
    function passHasNumber(pass) {
        return /\d/.test(pass);
    }

    function nameEntered(e) {
        return e.target.style.borderColor = correctInputColor(e.target.value);
    }
    function validateEmail(e) {
        return e.target.style.borderColor = correctInputColor(isValidEmail(e.target.value));
    }
    function passStrength(e) {
        $passHas6carac.style.color = passHas6carac(e.target.value) ? green : orange;
        $passHasLetter.style.color = passHasLetter(e.target.value) ? green : orange;
        $passHasNumber.style.color = passHasNumber(e.target.value) ? green : orange;
        return e.target.style.borderColor = isPassStrength(e.target.value);
    }
    function confirmPass(e) {
        return e.target.style.borderColor = correctInputColor(e.target.value === $passInput.value);
    }
    function enableButton(e) {
        e.preventDefault();
        //Validations
        if (!$nameInput.value)
            return $nameInput.focus();
        if (!$emailInput.value)
            return $emailInput.focus();
        if (!$passInput.value)
            return $passInput.focus();
        if (!isValidEmail($emailInput.value))
            return $emailInput.focus();
        if (isPassStrength($passInput.value) !== green)
            return $passInput.focus();
        if (!($passInput.value === $passconfirmInput.value))
            return $passconfirmInput.focus();

        $createAccButton.textContent = '...';

        // window.location = "https://jorgemadson.github.io";
        
    }
    function isPassStrength(pass) {
        return passColor(passHas6carac(pass), passHasLetter(pass), passHasNumber(pass));
    }
    function isValidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/m.test(email);
    }
    function correctInputColor(valid) {
        if (valid)
            return green;
        return '';
    }
    function passColor(firstStatus, secondStatus, thirdStatus) {
        if (firstStatus && secondStatus && thirdStatus) //all three
            return green;
        if (firstStatus) { //two of three
            if (secondStatus || thirdStatus)
                return orange;
        } else {
            if (secondStatus && thirdStatus)
                return orange;
        }
        return red; //one or none
    }
}
)(document);