document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content-section');
    const brand = document.querySelector('.brand');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const contactButton = document.getElementById('contact-button');
    const welcomeTextElement = document.getElementById('welcome-text');
    const body = document.body;
  
    const welcomeText = `Network Engineer @ Northrop Grumman`;
  
    let currentIndex = 0;
  
    function typeText(text, element, callback) {
      if (currentIndex < text.length) {
        element.textContent += text[currentIndex];
        currentIndex++;
        setTimeout(() => typeText(text, element, callback), 50);
      } else if (callback) {
        callback();
      }
    }
  
    function resetTextAnimation() {
      currentIndex = 0;
    }
  
    resetTextAnimation();
    typeText(welcomeText, welcomeTextElement, () => {
      resetTextAnimation();
      contactButton.classList.remove('hidden');
    });
  
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = tab.dataset.section;
  
        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
      });
    });
  
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      sections.forEach(section => section.classList.add('hidden'));
      document.getElementById('front').classList.remove('hidden');
    });
  
    darkModeToggle.addEventListener('click', () => {
      const isDarkMode = body.classList.toggle('dark-mode');
      if (isDarkMode) {
        darkModeToggle.innerHTML = '<span class="icon">🌙</span> Dark';
      } else {
        darkModeToggle.innerHTML = '<span class="icon">☀️</span> Light';
      }
    });
  
    contactButton.addEventListener('click', () => {
      sections.forEach(section => section.classList.add('hidden'));
      document.getElementById('contact').classList.remove('hidden');
    });
  });
  
  // JavaScript for Progress Tab Toggle Functionality
  document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".update-toggle");
  
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
