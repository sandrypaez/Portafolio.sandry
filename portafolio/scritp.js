/* ---------- EmailJS (ya configurado) ---------- */
if (window.emailjs) {
  emailjs.init("RLDomJgV5XRFRiGs0"); // tu Public Key
}

/* Form send (uses the service/template IDs you already set) */
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    feedback.textContent = "Enviando...";
    const serviceID = "servicio_cwrcrui";
    const templateID = "plantilla_o7h6kmq";
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

/* Dark mode toggle */
const toggle = document.getElementById("toggle-dark");
toggle && toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // change icon text
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

/* EN/ES dynamic text toggle */
const langBtn = document.getElementById("language-toggle");
let currentLang = "es";
langBtn && langBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  langBtn.textContent = currentLang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-es]").forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text !== null) el.textContent = text;
  });
});

/* Smooth scrolling for internal links */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    // only handle anchors within page
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({behavior:"smooth",block:"start"});
  });
});

/* Print / CV button */
const printBtn = document.getElementById("print-btn");
printBtn && printBtn.addEventListener("click", () => {
  window.print();
});
