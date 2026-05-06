function validateEmail(email) {

    let pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

function login() {

    let email = prompt("Enter Email");
    let password = prompt("Enter Password");

    if(!validateEmail(email)) {

        alert("Invalid Email Format");
        return;
    }

    if(email === "student@gmail.com" &&
       password === "123456") {

        alert("Login Successful");

    } else {

        alert("Invalid Credentials");
    }
}

login();
function sanitizeInput(input) {

    return input
    .replace(/[<>'"]/g, '')
    .replace(/javascript:/gi, '');
}