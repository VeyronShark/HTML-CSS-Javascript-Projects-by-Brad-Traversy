const sounds = [
  {
    name: "Bass Stab",
    url: "./sounds/bass-stab.mp3"
  },
  {
    name: "Chime",
    url: "./sounds/chime.mp3"
  },
  {
    name: "Glass Break",
    url: "./sounds/glass-break.mp3"
  },
  {
    name: "Intro",
    url: "./sounds/intro.mp3"
  },
  {
    name: "Minion",
    url: "./sounds/minion.mp3"
  },
  {
    name: "Slurp",
    url: "./sounds/slurp.mp3"
  }
];

const currentPlaying = new Audio();

const container = document.querySelector(".sounds-container");
const volumeBar = document.querySelector("#volume-ctrl");

currentPlaying.volume = volumeBar.value;

sounds.forEach((sound, index) => {
  let soundDiv = document.createElement("div");
  soundDiv.classList.add("sound");
  soundDiv.id = index;
  soundDiv.innerText = sound.name;
  container.appendChild(soundDiv);
}); 

const buttons = document.querySelectorAll(".sound");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    associatedSound = sounds[button.id];
    currentPlaying.src = associatedSound.url;
    currentPlaying.play();
  });
});

volumeBar.addEventListener('input', () => {
  const inputVolume = volumeBar.value;
  currentPlaying.volume = inputVolume;

  updateProgressBar();
});

function updateProgressBar() {
  const perc = volumeBar.value * 100;
  volumeBar.style.background = `linear-gradient(to right, #fff 0%, #fff ${perc}%, #000 ${perc}%, #000 100%)`;
}

