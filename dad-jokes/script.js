const joke = document.querySelector("#joke");
const btn = document.querySelector("#joke-btn");

const headerConfig = {
  headers: {
    'Accept': 'application/json'
  }
}

generateJoke();

async function generateJoke() {
  // fetch('https://icanhazdadjoke.com/', headerConfig)
  // .then(response => response.json())
  // .then(data => {
  //   joke.innerText = data.joke;
  // });

  const response = await fetch('https://icanhazdadjoke.com/', headerConfig);
  const data = await response.json();
  joke.innerText = data.joke;
}



btn.addEventListener('click', generateJoke)