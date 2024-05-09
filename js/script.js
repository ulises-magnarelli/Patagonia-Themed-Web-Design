//activate the hamburger menu 
const hamburger = document.querySelector("#icon");
const nav = document.querySelector(".nav-mobile");



hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("bx-x");
    nav.classList.toggle("active");
});




//HIDE MOBILE NAVIGATION AFTER CLICKING A LINK/OUTSIDE


document.onclick = function(n) {
    if(n.target.id !== "icon" && n.target.id !== "nav-mobile"){
        hamburger.classList.remove("bx-x");
        nav.classList.remove("active")
    }
}




//ADDING STICKY ANIMATION TO THE NAVEGATION

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", scrollY > 0);
});