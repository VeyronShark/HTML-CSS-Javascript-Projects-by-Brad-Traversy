const faqs = document.querySelectorAll(".faq");
const buttons = document.querySelectorAll(".faq button");

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.add("active");
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    button.parentElement.classList.toggle("active");
  }); 
});