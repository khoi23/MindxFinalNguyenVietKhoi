const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('check-password');

const loginForm = document.getElementById('signin-form');
const loginEmail = document.getElementById('signin-email');
const loginPassword = document.getElementById('signin-password');


// console.log(email.parentNode.classList.contains("success"));
/**========sign in ================ */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});

function checkInputs() {
    // get the values form the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();
    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(checkPasswordValue);
    // check username
    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add succes class
        setSuccessFor(username);
    }

    // check email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    // check passwords
    if (passwordValue === '') {
        setErrorFor(password, 'Passwords cannot be blank')
    } 
    else if (passwordValue.length <= "8") {
        setErrorFor(password, 'Passwords must be longer than 8 charaters')
    }
    else {
        setSuccessFor(password);
    }

    // check checkpassword
    if (checkPasswordValue === '') {
        setErrorFor(checkPassword, 'Passwords cannot be blank')
    }
    else if (checkPasswordValue.length <= "8") {
        setErrorFor(checkPassword, 'Passwords must be longer than 8 charaters')
    }
    else if (checkPasswordValue !== passwordValue) {
        setErrorFor(checkPassword, 'Passwords does not match')
    } 
    else {
        setSuccessFor(checkPassword)
    }

    if(email.parentNode.classList.contains("success") && 
    password.parentNode.classList.contains("success")&& 
    username.parentNode.classList.contains("success")&& 
    checkPassword.parentNode.classList.contains("success")) {
        window.location.href = "#";
        console.log("form submit");
        // localStorage.setItem("user", usernameValue)
        // localStorage.setItem("password", passwordValue)
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        
            user_records.push({
                "name":usernameValue,
                "email":emailValue,
                "psw":passwordValue
            })
            localStorage.setItem("users",JSON.stringify(user_records));
        alert('Dang ki thanh cong')
        window.location.href = 'index.html'
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



let localUser = JSON.parse(localStorage.getItem("users"))
console.log(localUser);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkLogin();
});
function checkLogin() {
    let vloginEmail = loginEmail.value.trim()
    let vloginPassword = loginPassword.value.trim()
    // check email
    if (vloginEmail === '') {
        setErrorFor(loginEmail, 'Email cannot be blank')
    } else if(!isEmail(vloginEmail)) {
        setErrorFor(loginEmail, 'Email is not valid')
    } else {
        setSuccessFor(loginEmail)
    }

    if (vloginPassword === '') {
        setErrorFor(loginPassword, 'Passwords cannot be blank')
    } 
    else if (vloginPassword.length <= "8") {
        setErrorFor(loginPassword, 'Passwords must be longer than 8 charaters')
    }
    else {
        setSuccessFor(loginPassword);
    }

    if(localUser.some((v)=>{ return v.email==vloginEmail && v.psw==vloginPassword})) {
        alert('login pass');
        // window.location.href="1.html";
    }
}