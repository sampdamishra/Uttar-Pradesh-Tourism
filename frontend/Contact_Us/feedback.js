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
document.getElementById('feedbackForm').addEventListener('submit',async(e) =>
{
    e.preventDefault();

    const feedbackData ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try{
        const response = await fetch('http://localhost:5000/api/feedback',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(feedbackData)
        });

        const result = await response.json();
        alert(result.message);
        document.getElementById('feedbackForm').reset();
    }
    catch(err){
        console.error("Error:", err);
        alert("Could not connect to the server.");
    }
});
