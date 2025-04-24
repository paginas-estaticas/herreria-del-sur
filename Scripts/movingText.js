document.addEventListener("DOMContentLoaded", function () {
  // Only modify classes if screen width is less than 996px
  if (window.innerWidth < 996) {
    const servicioItems = document.querySelectorAll('#ul-servicios li.moving-servicio');
    servicioItems.forEach(item => {
      item.classList.remove('moving-servicio');
      item.classList.add('moving-text');
    });
  }

  const movingTexts = document.querySelectorAll('.moving-text');
  const fadeInElements = document.querySelectorAll('.fade-in-element');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01 });

  movingTexts.forEach(element => {
    observer.observe(element);
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});
