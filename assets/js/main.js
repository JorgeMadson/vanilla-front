(function (document) {
    'use strict';
    //Inputs
    var $nameInput = document.querySelector('[data-js="name"]');
    var $emailInput = document.querySelector('[data-js="email"]');
    var $passInput = document.querySelector('[data-js="password"]');
    var $passconfirmInput = document.querySelector('[data-js="password-confirm"]');
    var $createAccButton = document.querySelector('[data-js="button"]');

    //Events
    $passInput.addEventListener('input', passStrength, false);
    $nameInput.addEventListener('input', nameEntered, false);
    $emailInput.addEventListener('input', validateEmail, false);
    $passconfirmInput.addEventListener('input', confirmPass, false);
    $createAccButton.addEventListener('click', enableButton, false)

    //Functions
    function nameEntered(e) {
        return e.target.style.borderColor = correctInputColor(e.target.value);
    }
    function validateEmail(e) {
        return e.target.style.borderColor = correctInputColor(isValidEmail(e.target.value));
    }
    function passStrength(e) {
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
        if (!isPassStrength($passInput.value))
            return $passInput.focus();
        if (!($passInput.value === $passconfirmInput.value))
            return $passconfirmInput.focus();

        // Pelo menos 6 carateres
        // Pelo menos 1 letra
        // Pelo menos 1 número

        if (!confirm("Tem certeza que deseja enviar o formulário?"))
            return alert("Não enviado.");
        return alert("Enviado com sucesso!")
    }
    function isPassStrength(pass) {
        return passColor(/^.{6,}$/.test(pass), /\w/.test(pass), /\d/.test(pass));
    }
    function isValidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/m.test(email);
    }
    function correctInputColor(valid) {
        if (valid)
            return '#17D499';
        return '';
    }
    function passColor(firstStatus, secondStatus, thirdStatus) {
        console.log(firstStatus, secondStatus, thirdStatus);
        if (firstStatus && secondStatus && thirdStatus) //all three
            return '#17D499'; // green
        if (firstStatus) { //two of three
            if (secondStatus || thirdStatus)
                return '#F7BC1C'; //orange      
        } else {
            if (secondStatus && thirdStatus)
                return '#F7BC1C'; //orange
        }
        return '#F79682' //red
    }
}
)(document);