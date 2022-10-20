let validPassword = false;
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPW = document.getElementById("confirm-password");

function verifyPasswords() {
    let password = document.getElementById("password");
    let confirmPW = document.getElementById("confirm-password");
    let invalidPWMsg = document.querySelector("label[for=password]");
    let result = checkMatchPasswords(password, confirmPW);

    if (result === true) {
        // passwords match
        password.classList.remove("invalid-pw");
        confirmPW.classList.remove("invalid-pw");
        invalidPWMsg.classList.remove("invalid-pw-msg");
        validPassword = true;
        console.log("passwords match")
    }
    else {
        // passwords do not match, update input design to indicate mismatch
        validPassword = false;
        console.log("passwords do not match");
    }
}

function checkMatchPasswords(password, confirmation) {
    if (password.value.length > confirmation.value.length || password.value.length < confirmation.value.length) {
        return false;
    }
    else {
        if (password.value === confirmation.value) {
            console.log("match!");
            return true;
        }
        else {
            return false;
        }
    }
}



document.getElementById("password").addEventListener("keyup", function() {
    if ( !(document.getElementById("password").classList.contains("invalid-pw")) ) {
        document.querySelector("label[for=password]").classList.add("invalid-pw-msg");
        document.getElementById("password").classList.add("invalid-pw");
        document.getElementById("confirm-password").classList.add("invalid-pw");
    }
});

document.getElementById("confirm-password").addEventListener("keyup", function() {
    if ( !(document.getElementById("confirm-password").classList.contains("invalid-pw")) ) {
        document.querySelector("label[for=password]").classList.add("invalid-pw-msg");
        document.getElementById("password").classList.add("invalid-pw");
        document.getElementById("confirm-password").classList.add("invalid-pw");
    }
});

document.getElementById("confirm-password").addEventListener("keyup", verifyPasswords)

document.querySelector("button").addEventListener("click", function(e) {
    if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "" || confirmPW.value === "") {

    }
    else if (!validPassword) {
        e.preventDefault();
    }
})