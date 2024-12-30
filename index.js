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

  document.addEventListener("DOMContentLoaded", () => {
  const workContainer = document.getElementById("work-container");

  // Array of work entries
  const workEntries = [
    {
      title: "Resume",
      imagePath: "assets/resume.png",
      link: "assets/resume.pdf",
      buttonText: "Click Here!"
    },
    {
      title: "Saijitsu",
      imagePath: "assets/Saijitsu.cover.png",
      link: "https://www.amazon.com",
      buttonText: "Preorder Now"
    }
  ];

  // Dynamically generate work entries
  workEntries.forEach((entry) => {
    const workEntry = document.createElement("div");
    workEntry.className = "work-entry";

    const img = document.createElement("img");
    img.src = entry.imagePath;
    img.alt = `${entry.title} Cover`;
    img.className = "book-cover";

    const details = document.createElement("div");
    details.className = "work-details";

    const title = document.createElement("p");
    title.className = "book-title";
    title.textContent = entry.title;

    const button = document.createElement("a");
    button.href = entry.link;
    button.target = "_blank";
    button.className = "preorder-button";
    button.textContent = entry.buttonText;

    details.appendChild(title);
    details.appendChild(button);

    workEntry.appendChild(img);
    workEntry.appendChild(details);

    workContainer.appendChild(workEntry);
  });
});

