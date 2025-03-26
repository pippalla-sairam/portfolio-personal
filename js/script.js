// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    })
  );
}

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href")?.substring(1);
    if (targetId) {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  });
});

// Typewriter Effect for Animated Text Display
const texts = [
  "Welcome to My Portfolio",
  "I am a B.Tech Computer Science Student",
  "I am a Frontend Developer",
  "I am an ML Enthusiast"
];

let index = 0, charIndex = 0;
const animatedText = document.getElementById("animated-text");

function typeWriter() {
  if (charIndex < texts[index].length) {
    animatedText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Speed of typing
  } else {
    setTimeout(() => {
      animatedText.textContent = "";
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeWriter();
    }, 2000); // Pause before next text
  }
}

if (animatedText) {
  window.onload = typeWriter;
}
