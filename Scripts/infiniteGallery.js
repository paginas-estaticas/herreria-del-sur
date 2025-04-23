document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('infinite-gallery');
const items = Array.from(container.children);
const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);

// Clone original items and append to the end
items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    container.appendChild(clone);
});

// Infinite scroll logic
container.addEventListener('scroll', () => {
    const scrollLimit = itemWidth * items.length;

    if (container.scrollLeft >= scrollLimit) {
    container.scrollLeft -= scrollLimit;
    }
});

// Optional: scroll hint or auto scroll
// setInterval(() => container.scrollLeft += 1, 20);
});
