document.addEventListener("DOMContentLoaded", function () {
    const movingTexts = document.querySelectorAll('.moving-text');
    const fadeInElements = document.querySelectorAll('.fade-in-element');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.01 }); // Trigger when 50% of the element is in view
  
    movingTexts.forEach(element => {
        observer.observe(element);
      });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
});
  