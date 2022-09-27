

function validateForm() {
    let username = document.forms["formLogin"]["username"].value;
    let password = document.forms["formLogin"]["username"].value;
    console.log(username)
    console.log(password)
}

function checkEmpty() {
    let users = document.getElementById("username").value;
    let passw = document.getElementById("password").value;
    console.log(users)
    if (users == "") {
        document.getElementById("username").style.borderColor = "#F00";
    } else {
        document.getElementById("username").style.borderColor = "#000";
    }
    if (passw == "") {
        document.getElementById("password").style.borderColor = "#F00";
    } else {
        document.getElementById("password").style.borderColor = "#000";
    }
}

