// JavaScript to hide the loading screen and show the main content
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
  
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 3000); // Match the animation-delay of 3 seconds
  });
// Example: Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
   