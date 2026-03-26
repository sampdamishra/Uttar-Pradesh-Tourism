document.addEventListener('DOMContentLoaded', function(){
    const Destinations = document.getElementById("Destinations");
    console.log(Destinations);
    const dropdown = document.getElementById("dropdown");
    console.log(dropdown);
    
    Destinations.addEventListener("mouseenter", function() {
        dropdown.style.display = "block";
    });
    Destinations.addEventListener("mouseleave", function() {
        dropdown.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const Media = document.getElementById("Media");
    console.log(Media);
    const dropdownMedia =document.getElementById("dropdownMedia");
    console.log(dropdownMedia);

    Media.addEventListener("mouseenter", function() {
        dropdownMedia.style.display = "block";
    });
    Media.addEventListener("mouseleave", function() {
        dropdownMedia.style.display = "none";
    });
}) ; 


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides-fade");
    let dots = document.getElementsByClassName("dot");
    if( n > slides.length){slideIndex = 1}
    if( n < 1){slideIndex = slides.length}
    for (i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add ("active");
}
document.addEventListener('DOMContentLoaded', function(){
    const popup = document.getElementById('welcome-popup');
    console.log(popup);
    const closeBtn = document.getElementById('close-btn');
    popup.classList.add('show');

    closeBtn.addEventListener('click', function (){
    popup.classList.remove('show');
    });
});
