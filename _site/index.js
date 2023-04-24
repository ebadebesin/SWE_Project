

// function myFunction() {

//     document.getElementById("myButton1").value="Light Mode"; 

//     var element = document.body;
//     if (element.value == "Dark mode") {
//         element.value = "Light mode";
//         // element.innerHTML= "Light mode";
//     }
//     else {
//         // element.value = "Dark mode";
//         element.classList.toggle("dark");
//     }

// }


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkModeEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}

function applyDarkMode() {
    const isDarkModeEnabled = JSON.parse(localStorage.getItem("darkModeEnabled"));
    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

window.addEventListener("DOMContentLoaded", applyDarkMode);


function toggleLightMode() {
    document.body.classList.toggle("light-mode");
    const isLightModeEnabled = document.body.classList.contains("light-mode");
    localStorage.setItem("lightModeEnabled", isLightModeEnabled);
}

function applyLightMode() {
    const isLightModeEnabled = JSON.parse(localStorage.getItem("lightModeEnabled"));
    if (isLightModeEnabled) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
}

window.addEventListener("DOMContentLoaded", applyLightMode);
  
// document.addEventListener("DOMContentLoaded", function () {
//     const storedUsername = localStorage.getItem("username");
  
//     if (storedUsername) {
//       const welcomeMessage = document.createElement("h2");
//       welcomeMessage.textContent = `Welcome, ${storedUsername}!`;
//       document.body.insertBefore(welcomeMessage, document.body.firstChild);
//     }
// });

const quotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The way to get started is to quit talking and begin doing.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "If you can dream it, you can achieve it.",
    "Happiness is the art of making a bouquet of those flowers within reach. ~Anon.",
    "Happiness is the meaning and the purpose of life, the whole aim and end of human existence. ~Aristotle",
    "The foolish man seeks happiness in the distance, the wise grows it under his feet. ~J. Robert Oppenheimer",
    "True happiness is not attained through self-gratification, but through fidelity to a worthy purpose. ~Helen Keller",
    "If being happy is important to you, try this instead of regretting all you lack, celebrate all you’ve got. ~Brian Vaszily",
    "Man wishes to be happy even when he lives so as to make happiness impossible. ~Augustine",
    "The greatest happiness you can have is knowing that you do not necessarily require happiness. ~William Saroyan",
    "Happiness grows at our own firesides, and is not to be picked in strangers’ gardens. ~Douglas Jerrold", 
    "Most people would rather be certain they’re miserable, than risk being happy. ~Robert Anthony",
    "Happiness is a risk. If you’re not a little scared, then you’re not doing it right. ~Sarah Addison",
    "Most folks are about as happy as they make up their minds to be. ~Abraham Lincoln",
    "The end of life is not to be happy, nor to achieve pleasure and avoid pain, but to do the will of God, come what may. ~Martin Luther King",
    "The thing everyone should realize is that the key to happiness is being happy by yourself and for yourself. ~Ellen DeGeneres",
    "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude. ~Denis Waitley",
    "The only thing that will make you happy is being happy with who you are, and not who people think you are. ~Goldie Hawn",
    "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom. ~Marcel Proust",
    "True happiness ne’er entered at an eye; true happiness resides in things unseen. ~Edward Young",
    "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace. ~Chuck Palahniuk",
    "Happiness is a state of mind. It's just according to the way you look at things. ~Walt Disney",
    "There is hope, even when your brain tells you there isn’t. ~John Green",
    "The true definition of mental illness is when the majority of your time is spent in the past or future, but rarely living in the realism of NOW. ~Shannon L. Alder ",
    "No one would ever say that someone with a broken arm or a broken leg is less than a whole person, but people say that or imply that all the time about people with mental illness. ~Elyn R. Saks",
    "Things not to say to someone with mental illness: Ignore it. Forget about it. Fight it. You are better than this. You are over thinking. ~Nitya Prakash"
    ];
  
  function displayQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[quoteIndex];
  }
  

// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error")
//     messageElement.classList.add('form__message--${type}');
// }

// // setFormMessage(loginForm, "success", "You're logged in!");

// function setInputError(inputElement, message){
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input--error-message").textContent = message;
// }

// function clearInputError(inputElement){
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input--error-message").textContent = " ";
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const loginForm = document.querySelector("#login");
//     const createAccountForm = document.querySelector("#createAccount");

//     document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.add("form--hidden");
//         createAccountForm.classList.remove("form--hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener("click", e => {
//         e.preventDefault();
//         loginForm.classList.remove("form--hidden");
//         createAccountForm.classList.add("form--hidden");
//     });

//     loginForm.addEventListener("submit", e => {
//         e.preventDefault();

//         //Perform AJAX/Fetch login

//         setFormMessage(loginForm, "error", "Invalid username/password combination");

//     });

//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
//                 setInputError(inputElement, "Username must be at least 10 characters in length");
//             }
//         });

//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);

//         });
//     });
// });


