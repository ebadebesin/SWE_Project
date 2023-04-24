document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');
    const signInBtn = document.getElementById('sign-in-btn');
    // const welcomeMessage = document.getElementById('welcome-message');
    const userDisplay = document.getElementById('user-display');
    const signOutBtn = document.getElementById('sign-out-btn');
 
  
    function showWelcomeMessage(username) {
      userDisplay.textContent = username;
      signinForm.style.display = 'none';
      welcomeMessage.style.display = 'block';
    }
  
    function showSigninForm() {
      window.location.href = "user.html";
      signinForm.style.display = 'block';
      welcomeMessage.style.display = 'none';
      
    }
  
    signinForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "index.html";
      } else {
        alert("Please enter your username and password.");
      }

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      showWelcomeMessage(username);
    });
  
    signOutBtn.addEventListener('click', function () {
      localStorage.removeItem('username');
      showSigninForm();
    });
    signInBtn.addEventListener('click', function () {
        window.location.href = "index.html";
      });
  
    // const storedUsername = localStorage.getItem('username');
    // if (storedUsername) {
    //   showWelcomeMessage(storedUsername);
    // } else {
    //   showSigninForm();
    // }
  });
  