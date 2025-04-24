document.addEventListener("DOMContentLoaded", function () {
    const ulElement = document.querySelector('#ul-servicios');
    const listItems = document.querySelectorAll('#ul-servicios .moving-servicio');

    function showListItems() {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 300 * (index + 1)); // 300ms delay for each item
        });
    }

    if (window.matchMedia('(min-width: 996px)').matches) {
        // Use IntersectionObserver on large screens too
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showListItems();
                    observer.unobserve(entry.target); // Only trigger once
                }
            });
        }, { threshold: 0.2 }); // Adjust threshold if needed

        observer.observe(ulElement);
    } else {
        // On smaller screens, also observe the UL and trigger fade-in
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    listItems.forEach(item => item.classList.add('visible'));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(ulElement);
    }
});
