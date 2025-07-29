const imageUrls = [
    'Imágenes/Herreria/herreria-image-6.webp',
    'Imágenes/Herreria/herreria-image-1.webp',
    'Imágenes/Herreria/herreria-image-2.webp'
  ];
  
  const bgImages = imageUrls.map(url => `url("${url}")`);
  
  // Preload images
  imageUrls.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  let index = 0;
  let current = 0;
  
  const layers = [
    document.getElementById("bg1"),
    document.getElementById("bg2")
  ];
  
  function crossFadeBackground() {
  const next = (current + 1) % 2;

  layers[next].style.backgroundImage = bgImages[index];

  // Prepare incoming layer
  layers[next].style.transform = 'scale(1)';
  
  // Don't touch the outgoing layer's transform at all

  setTimeout(() => {
    layers[next].style.opacity = "1";
    layers[current].style.opacity = "0";
    
    // Once transition is done, reset current (now hidden) layer's scale
    setTimeout(() => {
      layers[current].style.transform = 'scale(1.4)';
    }, 100); // match fade duration

    current = next;
    index = (index + 1) % bgImages.length;
  }, 20);
};

  
  crossFadeBackground();
  setInterval(crossFadeBackground, 4000);

  