// Select the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', event => {
  // Update the button text
  event.target.textContent = 'Clicked';
});

// Select the input element
const input = document.querySelector('input');

// Add a keydown event listener to the input
input.addEventListener('keydown', event => {
  // Print the value of the input to the console
  console.log(event.target.value);
});

// Select the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', event => {
  // Prevent the form from being submitted
  event.preventDefault();
  // Print a message to the console
  console.log('Form was submitted');
});
