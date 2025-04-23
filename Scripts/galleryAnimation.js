document.addEventListener('DOMContentLoaded', () => {
const gallery = document.querySelector('.scroll-container');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        gallery.classList.add('scroll-hint');
        observer.disconnect(); // Only animate once
    }
    });
}, {
    threshold: 1 // adjust based on your layout
});

observer.observe(gallery);
});
