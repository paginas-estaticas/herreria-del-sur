
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

  // ✅ Modal logic below
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  // ✅ Function to open modal with image
  function openModal(src) {
    modal.style.display = 'flex';
    modalImg.src = src;
  }

  // ✅ Event delegation: Listen on the container and filter clicks on <img>
  container.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      openModal(event.target.src);
    }
  });

  // Close modal on close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on clicking background
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on Esc key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});
