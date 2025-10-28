/* ---------- EMAILJS ---------- */
if (window.emailjs) {
  emailjs.init("RLDomJgV5XRFRiGs0"); // tu Public Key
}

/* ---------- FORMULARIO DE CONTACTO ---------- */
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    feedback.style.color = "#fff";
    feedback.textContent = "Enviando...";

    // IDs de servicio y plantilla (revisar que coincidan con los tuyos en EmailJS)
    const serviceID = "servicio_cwrcrui";
    const templateID = "plantilla_o7h6kmq";

    // Enviar formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        feedback.style.color = "green";
        feedback.textContent = "💌 Mensaje enviado con éxito. ¡Gracias!";
        form.reset();
      }, (err) => {
        feedback.style.color = "crimson";
        feedback.textContent = "❌ Error al enviar. Intenta de nuevo.";
        console.error("EmailJS error:", err);
      });
  });
}

/* ---------- MODO OSCURO / CLARO ---------- */
const toggleModeBtn = document.getElementById("toggle-dark");
const body = document.body;

// Inicializar modo al cargar la página
if (!localStorage.getItem("theme")) {
  body.classList.remove("light-mode"); // oscuro por defecto
  toggleModeBtn.textContent = "🌙";
  localStorage.setItem("theme", "dark");
} else if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleModeBtn.textContent = "🌞";
} else {
  body.classList.remove("light-mode");
  toggleModeBtn.textContent = "🌙";
}

// Alternar modo al hacer clic
toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleModeBtn.textContent = "🌞"; // sol para claro
  } else {
    localStorage.setItem("theme", "dark");
    toggleModeBtn.textContent = "🌙"; // luna para oscuro
  }
});

/* ---------- CAMBIO DE IDIOMA ES / EN ---------- */
const langBtn = document.getElementById("language-toggle");
let currentLang = "es";

langBtn && langBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  langBtn.textContent = currentLang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-es]").forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text !== null) el.textContent = text;
  });
  // Cambiar placeholders también
  document.querySelectorAll("[data-es-placeholder]").forEach(el => {
    const ph = el.getAttribute(`data-${currentLang}-placeholder`);
    if (ph !== null) el.placeholder = ph;
  });
});

/* ---------- SMOOTH SCROLL PARA ENLACES INTERNOS ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ---------- BOTÓN DE IMPRIMIR / CV ---------- */
const printBtn = document.getElementById("print-btn");
printBtn && printBtn.addEventListener("click", () => {
  window.print();
});
