
document.addEventListener('DOMContentLoaded', function() {

    // Audio Introduction
const audio = new Audio("intro.m4a");
const intro = document.querySelector("#introduction");

intro.addEventListener("click", () => {
    audio.play();
    console.log("play");
 
});

// Navigation bar 
var navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});


});
