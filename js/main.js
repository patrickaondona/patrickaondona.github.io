function openSignup() {
    let signUp = document.getElementById("sign-in-sign-up");
    signUp.classList.toggle("open-sign-in-sign-up");
} 
let toggleBtn = document.getElementById("sign-in");
toggleBtn.addEventListener("click", openSignup);