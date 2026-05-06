function openLogin() {

    document
        .getElementById("loginModal")
        .style.display = "flex";
}


function closeLogin() {

    document
        .getElementById("loginModal")
        .style.display = "none";
}



/* EMAIL VALIDATION */

function validateEmail(email) {

    let pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}



/* INPUT SANITIZATION */

function sanitizeInput(input) {

    return input
        .replace(/[<>'"]/g, '')
        .replace(/javascript:/gi, '');
}



/* LOGIN SYSTEM */

function login() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;


    email = sanitizeInput(email);

    password = sanitizeInput(password);



    if (!validateEmail(email)) {

        alert("Invalid Email Format");

        return;
    }



    if (
        email.includes("<script>") ||
        password.includes("<script>")
    ) {

        alert("Malicious Input Detected");

        return;
    }



    if (
        email === "student@gmail.com"
        &&
        password === "123456"
    ) {

        localStorage.setItem(
            "secure_session",
            btoa(email)
        );

        alert("Login Successful");

        closeLogin();

    } else {

        alert("Invalid Credentials");
    }
}



/* ACCESS CONTROL */

function enrollCourse(courseName) {

    let currentSession =
        localStorage.getItem(
            "secure_session"
        );


    if (!currentSession) {

        alert(
            "Please Login First"
        );

        openLogin();

        return;
    }


    alert(
        "Successfully enrolled in "
        + courseName
    );
}