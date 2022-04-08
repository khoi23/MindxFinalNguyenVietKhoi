/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollNavBar() {
    const navBar = document.getElementById('fixed')
    // when the scroll is greather than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) navBar.classList.add('fixed'); else navBar.classList.remove('fixed')
}
window.addEventListener('scroll', scrollNavBar)


/*=============== SHOW SEARCH ===============*/
const search = document.getElementById('search'),
    searchButton = document.getElementById('search-button'),
    searchBox = document.querySelector('.search__box')

/* Validate if constant exists */
if(searchButton) {
    searchButton.addEventListener('click', () => {
        search.classList.add('show-search');
    });
}
if(search) {
    search.addEventListener('click', () => {
        search.classList.remove('show-search');
    })
    searchBox.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('user'),
        loginButton = document.getElementById('login-button'),
        signinClose = document.getElementById('signin-close'),
        signupClose = document.getElementById('signup-close'),
        userBox = document.querySelector('.user__box'),
        signup = document.querySelector('.sign__up')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
    loginButton.addEventListener('click', () => {
        login.classList.add('show-login');
    })
}


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(signinClose) {
    signinClose.addEventListener('click', () => {
        login.classList.remove('show-login');
        removeSignin();
    })
}
if(signupClose) {
    signupClose.addEventListener('click', () => {
        login.classList.remove('show-login');
        removeSignup();
    })
}
if(login) {
    login.addEventListener('click', () => {
        login.classList.remove('show-login');
        removeSignup();
        removeSignin();
    })
    userBox.addEventListener('click', (e) => {
        e.stopPropagation()
    })
    signup.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

function removeSignup() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('check-password').value = '';
}
function removeSignin() {
    document.getElementById('signin-email').value = '';
    document.getElementById('signin-password').value = '';
}

document.getElementById("sign-up").style.display = "none";

function showSignin() {
    document.getElementById("sign-up").style.display = "none";
    document.getElementById("sign-in").style.display = "block";
    removeSignup();
}
function showSignup() {
    removeSignin();
    document.getElementById("sign-up").style.display = "block";
    document.getElementById("sign-in").style.display = "none";
}


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== SHOW MODAL ===============*/
const modalbox = document.getElementById('modal-succes'),
        modalToggle = document.getElementById('button-modal'),
        modalClose = document.getElementById('modal-close'),
        modalContent = document.getElementById('modal-open')


/*===== MODAL SHOW =====*/
/* Validate if constant exists */
if(modalToggle) {
    modalToggle.addEventListener('click', () => {
        modalbox.classList.add('show-modal');
    });
}

/*===== MODAL HIDDEN =====*/
/* Validate if constant exists */
if(modalClose) {
    modalClose.addEventListener('click', () => {
        modalbox.classList.remove('show-modal');
    });
}

if(modalbox) {
    modalbox.addEventListener('click', () => {
        modalbox.classList.remove('show-modal');
    })
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}
/** ============ Slider ============== */
const mySlide = document.querySelectorAll('.slider__box'),
	  dot = document.querySelectorAll('.dot');

let counter = 1;
    slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	let i;
	for(i = 0; i<mySlide.length; i++){
		mySlide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active-slide', '');
	}
	if(n > mySlide.length){
	   counter = 1;
	}
	if(n < 1){
	   counter = mySlide.length;
	}
    mySlide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active-slide";
}

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height,
    // add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});

var supportImg = document.querySelectorAll('.support__img');
var l = 0;
supportfun(l);
function supportfun() {
    for(var i of supportImg)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-260px";}
        if (l==2) {i.style.left = "-520px";}
        if (l==3) {i.style.left = "-780px";}
        if (l==4) {i.style.left = "-1040px";}
        if (l==5) {i.style.left = "-1300px";}
        if (l > 5) {l=1;}
    }
}


let time = setInterval(autosSlide, 4000);
function autosSlide() {
	l += 1;
	supportfun(l);
}

function resetsTimer() {
	clearInterval(time);
	time = setInterval(autosSlide, 4000);
}
// supportArrow[1].onclick = ()=>{
//     l++;
//     for(var i of supportImg)
//     {
//         if (l==0) {i.style.left = "0px";}
//         if (l==1) {i.style.left = "-740px";}
//         if (l==2) {i.style.left = "-1480px";}
//         if (l==3) {i.style.left = "-2220px";}
//         if (l==4) {i.style.left = "-2960px";}
//         if (l>4) {l=0;}
//     }
// }
// supportArrow[0].onclick = ()=>{
//     l--; 
//     for(var i of supportImg)
//     {	
//         if (l==0) {i.style.left = "0px";}
//         if (l==1) {i.style.left = "-740px";}
//         if (l==2) {i.style.left = "-1480px";}
//         if (l==3) {i.style.left = "-2220px";}
//         if (l < 0) {l=4;}
//     }
// }
