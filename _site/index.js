// //Not working
// window.onload = function() {
//     var navbar = document.getElementById("nav");
//     var logo = document.createElement("img");
//     logo.src = "well_logo.jpeg";
//     logo.alt = "Logo";
//     navbar.insertBefore(logo, navbar.firstChild);
// };

// // Get the button that opens the dropdown menu
// var dropBtn = document.querySelector(".dropbtn");

// // Get the dropdown menu
// var dropdownContent = document.querySelector(".dropdown-content");

// // Add event listener to the button that opens the dropdown menu
// dropBtn.addEventListener("click", function() {
//     // Toggle the visibility of the dropdown menu
//     dropdownContent.classList.toggle("show");
// });

function myFunction() {

    document.getElementById("myButton1").value="Light Mode"; 

    var element = document.body;
    if (element.value == "Dark mode") {
        element.value = "Light mode";
        // element.innerHTML= "Light mode";
    }
    else {
        // element.value = "Dark mode";
        element.classList.toggle("dark");
    }

}

document.getElementById("hamburger").addEventListener("click", function () {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
    } else {
      navLinks.style.display = "none";
    }
  });
  

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error")
    messageElement.classList.add('form__message--${type}');
}

// setFormMessage(loginForm, "success", "You're logged in!");

function setInputError(inputElement, message){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input--error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input--error-message").textContent = " ";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //Perform AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);

        });
    });
});


