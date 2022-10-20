function verifyPasswords() {
    let password = document.getElementById("password");
    let confirmPW = document.getElementById("confirm-password");
    let result = checkMatchPasswords(password, confirmPW);

    if (result === true) {
        // passwords match
        password.classList.remove("invalid-pw");
        confirmPW.classList.remove("invalid-pw");
        console.log("passwords match")
    }
    else {
        // passwords do not match, update input design to indicate mismatch
        password.classList.add("invalid-pw");
        confirmPW.classList.add("invalid-pw");
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

document.getElementById("confirm-password").addEventListener("keyup", verifyPasswords)