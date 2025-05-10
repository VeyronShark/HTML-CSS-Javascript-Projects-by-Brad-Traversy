const xboxSplit = document.querySelector(".split.right");
const ps5Split = document.querySelector(".split.left");
const container = document.querySelector(".container");

xboxSplit.addEventListener('mouseover', () => {
  container.classList.add("hover-right");
})
xboxSplit.addEventListener('mouseout', () => {
  container.classList.remove("hover-right");
})

ps5Split.addEventListener('mouseover', () => {
  container.classList.add("hover-left");
})
ps5Split.addEventListener('mouseout', () => {
  container.classList.remove("hover-left");
})