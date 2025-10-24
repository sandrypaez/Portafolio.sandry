// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const seccion = document.querySelector(this.getAttribute('href'));
      seccion.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Formulario simulado
  document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();
    alert("💌 ¡Gracias por tu mensaje, Sandrith te responderá pronto!");
  });
  
  // Toggle modo oscuro
const toggle = document.getElementById("toggle-dark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
