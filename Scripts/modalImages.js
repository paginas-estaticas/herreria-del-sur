const images = document.querySelectorAll('#infinite-gallery img');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');

  // Show modal with clicked image
  images.forEach(image => {
    image.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = image.src;
    });
  });

  // Close modal on close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on background click
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on Escape key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });