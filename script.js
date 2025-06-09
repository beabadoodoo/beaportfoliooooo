document.addEventListener('DOMContentLoaded', () => {
    // Select all text elements you want to animate
    const animatedTextElements = document.querySelectorAll(
        '.title-text, .now-entering, .bottom-text p, .bottom-text .column-question, .bottom-text .column-answer, .action-button, .site-footer p'
    );

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is visible, add the class to animate
                entry.target.classList.add('is-visible');
            } else {
                // Element is NOT visible, remove the class to reset for next time
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    animatedTextElements.forEach(element => {
        // Add the base animation class
        element.classList.add('swoop-up-animation');
        observer.observe(element);
    });
});