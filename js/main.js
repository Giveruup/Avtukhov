var form = document.getElementById("my-form");
var status = document.getElementById("form__status")

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form__status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    form__status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    form__status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
