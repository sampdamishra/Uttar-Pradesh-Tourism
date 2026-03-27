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
});
