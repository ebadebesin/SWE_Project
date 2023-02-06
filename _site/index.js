//Not working
window.onload = function() {
    var navbar = document.getElementById("nav");
    var logo = document.createElement("img");
    logo.src = "well_logo.jpeg";
    logo.alt = "Logo";
    navbar.insertBefore(logo, navbar.firstChild);
};

// Get the button that opens the dropdown menu
var dropBtn = document.querySelector(".dropbtn");

// Get the dropdown menu
var dropdownContent = document.querySelector(".dropdown-content");

// Add event listener to the button that opens the dropdown menu
dropBtn.addEventListener("click", function() {
    // Toggle the visibility of the dropdown menu
    dropdownContent.classList.toggle("show");
});


  
