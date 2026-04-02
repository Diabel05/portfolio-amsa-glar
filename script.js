document.addEventListener("DOMContentLoaded", () => {
  /* --- 1. CURSEUR PERSONNALISÉ (TAILLE RÉDUITE ET FLUIDE) --- */
  const cursor = document.createElement("div");
  cursor.id = "cursor";
  const follower = document.createElement("div");
  follower.id = "cursor-follower";
  document.body.append(cursor, follower);

  document.addEventListener("mousemove", (e) => {
    // Mise à jour immédiate du point central
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Mise à jour douce du cercle extérieur (follower)
    requestAnimationFrame(() => {
      follower.style.left = e.clientX - 12 + "px";
      follower.style.top = e.clientY - 12 + "px";
    });
  });

  // Effet hover plus élégant sur les éléments cliquables
  const clickableElements = document.querySelectorAll(
    "a, button, .card, input, textarea, i",
  );
  clickableElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      follower.style.transform = "scale(1.5)";
      follower.style.backgroundColor = "rgba(99, 102, 241, 0.2)";
    });
    el.addEventListener("mouseleave", () => {
      follower.style.transform = "scale(1)";
      follower.style.backgroundColor = "transparent";
    });
  });

  /* --- 2. GESTION DU MENU MOBILE (ROBUSTE) --- */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");

      // Inversion de l'icône (bars <-> times)
      const icon = menuToggle.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  /* --- 3. EFFET TYPEWRITER (UNIQUEMENT SUR INDEX) --- */
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = typewriter.innerText;
    typewriter.innerText = "";
    let i = 0;

    function typeEffect() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
      }
    }
    typeEffect();
  }
});
