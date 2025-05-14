const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  updateCounter(counter, 2000, 20);
});

function updateCounter(counter, duration, frequency) {
  const iterations = duration / frequency;
  const target = +counter.getAttribute("numtarget");
  const increment = target / iterations;

  let currentValue = 0;

  const update = setInterval(() => {
    const currentDisplay = +counter.innerText;

    if (currentDisplay < target) {
      currentValue += increment;
      counter.innerText = `${Math.ceil(currentValue)}`;
    } 
    else if (currentDisplay >= target) {
      counter.innerText = `${target}`;
      clearInterval(update);
    }
  }, frequency);
}