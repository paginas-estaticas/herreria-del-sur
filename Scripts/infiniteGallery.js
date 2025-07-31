const mediaQuery = window.matchMedia('(min-width: 0px)');

function initializeGallery() {
    const gallery = document.getElementById('ul-self-scroll');
    const items = gallery.querySelectorAll('li');
    const numItems = items.length;
    let scrollSpeed = 1; // Adjust the scroll speed here

    // Duplicate the images and append them after the original items
    items.forEach(item => {
        gallery.appendChild(item.cloneNode(true));
    });

    // Function to move the gallery
    function moveGallery() {
        gallery.scrollLeft += scrollSpeed;

        // Check if the first set of images has fully scrolled out of view
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = 0; // Jump back to the start, creating the seamless loop
        }
    }

    // Move gallery every 30ms
    setInterval(moveGallery, 10);
}

// Initialize gallery if the media query matches
if (mediaQuery.matches) {
    initializeGallery();
}

// Add listener to handle window resizing
mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        initializeGallery();  // Initialize gallery when viewport width >= 996px
    }
});
