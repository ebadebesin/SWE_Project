function myFoodApi() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '117b9290e4mshf9b94b11e5a8ea2p1a8f21jsn9eae3bb37436',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

console.log(response);

////////////////////////


const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
// });
// document.addEventListener("click", function (event) {
//     // Checking if the button was clicked
//     if (!event.target.matches("#button")) return;


// function renderFood(data) {
//     // Get text elements
//     const setup = document.getElementById("setup");
//     const punchline = document.getElementById("punchline");
//     const error = document.getElementById("error");
  
//     // Hide error and render jokes
//     error.innerHTML = "";
//     setup.innerHTML = data.setup;
//     punchline.innerHTML = data.punchline;
//   }
  
//   function renderError() {
//     const error = document.getElementById("error");
//     error.innerHTML = "Whoops, something went wrong. Please try again later!";
//   }
