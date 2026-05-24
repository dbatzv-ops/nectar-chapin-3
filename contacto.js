const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Mensaje recibido. Pronto podrás conectar este formulario con correo o base de datos.");
    contactForm.reset();
  });
}
