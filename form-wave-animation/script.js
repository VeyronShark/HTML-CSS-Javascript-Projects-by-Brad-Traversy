const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  letters = label.innerText.split("");
  let spans = letters.map((letter, i) => {
    return `<span style="transition-delay:${i * 40}ms;">${letter}</span>`;
  })
  label.innerHTML = spans.join("");
});