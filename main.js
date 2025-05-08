// document.addEventListener("DOMContentLoaded", function () {
//   const images = ["images/slider1.jpg", "images/slider2.jpg", "images/slider3.jpg"];
//   let index = 0;

//   setInterval(() => {
//       index = (index + 1) % images.length;
//       document.getElementById("slider-img").src = images[index];
//   }, 3000);

//   document.getElementById("contact-form").addEventListener("submit", function (event) {
//       event.preventDefault();
//       alert("Thank you for your message!");
//   });
// });

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Message sent successfully! We will get back to you shortly.');
      form.reset();
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
