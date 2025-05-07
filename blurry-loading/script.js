const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let loadAnimation = setInterval(blurring, 30);

function blurring() {
  load++;
 
  if (load > 99) {
    clearInterval(loadAnimation);
  }
  
  loadText.innerText = `${load}%`;

  loadText.style.opacity = 1 - (load * 0.01);
  bg.style.filter = `blur(${30 - ((30/100) * load) }px)`;
}