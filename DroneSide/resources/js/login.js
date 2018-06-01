//
let loginBox = $("#login-box");
let registerBox = $("#register-box");
let forgotBox = $("#forgot-box");
let inputEmail = $("#email");
let forgotEmail = $("#forgotEmail");
let inputPassword = $("#password");
let forgotPass = $("#forgotPass");
let inputRegEmail = $("#regEmail");
let inputRegUsername = $("#regName");
let inputRegPassword = $("#regPassword");

if (window.location.pathname === "/register") {
    showRegistration();
}

function showRegistration() {
    loginBox.hide();
    forgotPass.hide();
    forgotBox.hide();
    registerBox.show();
}

function showForgot() {
    loginBox.hide();
    forgotPass.hide();
    forgotBox.show();
}

function backToLogin() {
    registerBox.hide();
    forgotBox.hide();
    loginBox.show();
    forgotPass.show();
}

function searchKeyPress(e, registration) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode === 13) {
        if (registration) {
            register();
        }
        else {
            signIn();
        }
    }
}

function signIn() {
    let email = inputEmail.val();
    let password = inputPassword.val();

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        redirect();
    }).catch(err => {
        let code = err.code;

        if (code === "auth/user-not-found") {
            alert("Brukeren finnes ikke");
        }
        else if (code === "auth/wrong-password") {
            alert("Feil passord");
        }
        else {
            alert("Kunne ikke logge inn");
        }
    });
}

function register() {
    let email = inputRegEmail.val();
    let username = inputRegUsername.val();
    let password = inputRegPassword.val();

    if (!username) {
        alert("Du må velge et brukernavn");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        firebase.auth().currentUser.updateProfile({
            displayName: username
        }).then(function() {
            redirect();
        }).catch(function(error) {
            // An error happened.
        });
    }).catch(err => {
        let code = err.code;

        if (code === "auth/email-already-in-use") {
            alert("E-post er allerede i bruk");
        }
        else if (code === "auth/weak-password") {
            alert("For svakt passord");
        }
        else {
            alert("Kunne ikke registrere brukeren");
        }

        console.error(err);
    });
}

function sendForgotEmail() {
    firebase.auth().sendPasswordResetEmail(forgotEmail.val()).then(() => {
        alert("Gjenopprettelses e-post sendt! Vennligst sjekk innboksen din.");
    }).catch((error) => {
        if(error.code === "auth/user-not-found") {
            alert("Brukeren finnes ikke");
        }
        else {
            alert("En feil oppstod");
            console.log(error.code + " | " + error.message);
        }
    });
}

function redirect() {
    /*window.history.back();*/
    window.location = "store.html";
}