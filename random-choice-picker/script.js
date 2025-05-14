const tags = document.querySelector("#tags");
const textBox = document.querySelector("#textarea");

textBox.focus();

textBox.addEventListener('keyup', (e) => {
  const values = textBox.value.split(",");
  createTags(values);

  if (e.key === "Enter"){
    selectRandom();
    textBox.value = '';
  }
})

function createTags(values) {
  const tagValues = values.map(value => value.trim()).filter(value => value !== "");
  tags.innerHTML = '';

  tagValues.forEach(tag => {
    const newTag = document.createElement("span");
    newTag.classList.add("tag");
    newTag.innerText = tag;
    tags.appendChild(newTag);
  });
}

function selectRandom() {
  let times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    toggleHighlight(randomTag);

    times--;
    if (times === 0){
      clearInterval(interval);
    } else {
      setTimeout(() => {
        toggleHighlight(randomTag)
      }, 100);
    }
  }, 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  const randomChoice = Math.floor(Math.random() * tags.length);
  return tags[randomChoice];
}

function toggleHighlight(tag) {
  tag.classList.toggle('highlight');
}