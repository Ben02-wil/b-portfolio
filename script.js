function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("active");
    });
});

// Smooth fade-in animation for elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to cards and sections on load
document.querySelectorAll('.card, .skill-chip, section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});