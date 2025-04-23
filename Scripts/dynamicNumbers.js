document.addEventListener("DOMContentLoaded", function () {
    const observerTarget = document.getElementById("ul-beneficios");
    const animationDuration = 1000; // total duration in ms
    const startDelay = 500; // delay before animation starts, in ms

    // Select all target elements
    const elements = document.querySelectorAll('.dynamic-number');

    // Store original values and reset text
    elements.forEach(el => {
        const originalText = el.textContent.trim();
        el.dataset.originalValue = originalText; // Save for later use

        const isPercentage = originalText.includes('%');
        const hasPlus = originalText.includes('+');
        el.textContent = hasPlus ? '+0' : (isPercentage ? '0%' : '0');
    });

    const animateNumbers = () => {
        elements.forEach(el => {
            const originalText = el.dataset.originalValue;
            const isPercentage = originalText.includes('%');
            const hasPlus = originalText.includes('+');

            const numericValue = parseInt(originalText.replace(/[^\d]/g, ''));
            const frameRate = 60; // 60fps
            const totalFrames = Math.round(animationDuration / (1000 / frameRate));
            const increment = numericValue / totalFrames;
            let current = 0;
            let frame = 0;

            const update = () => {
                if (frame < totalFrames) {
                    current += increment;
                    let displayValue = Math.round(current);
                    let displayText = displayValue.toString();
                    if (hasPlus) displayText = '+' + displayText;
                    if (isPercentage) displayText += '%';
                    el.textContent = displayText;
                    frame++;
                    requestAnimationFrame(update);
                } else {
                    // Ensure final value is exact
                    let finalText = numericValue.toString();
                    if (hasPlus) finalText = '+' + finalText;
                    if (isPercentage) finalText += '%';
                    el.textContent = finalText;
                }
            };

            requestAnimationFrame(update);
        });
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateNumbers, startDelay);
                obs.unobserve(entry.target); // run only once
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(observerTarget);
});
