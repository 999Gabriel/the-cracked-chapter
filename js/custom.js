document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        // Add scrolled class to header when scrolling down
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }

        // Animate elements on scroll
        animateOnScroll();
    });

    // Back to top button
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        navToggle.querySelector('i').classList.toggle('fa-bars');
        navToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile nav when clicking on links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            navToggle.querySelector('i').classList.add('fa-bars');
            navToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize testimonial carousel
    initCarousel();

    // Initial animation for elements in viewport
    animateOnScroll();

    // Setup contact form submission
    setupContactForm();
});

// Function to initialize testimonial carousel
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = track.querySelectorAll('.testimonial-card');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    const indicators = document.querySelector('.carousel-indicators');

    if (slides.length === 0) return;

    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);

        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width +
        parseInt(window.getComputedStyle(slides[0]).marginLeft) +
        parseInt(window.getComputedStyle(slides[0]).marginRight);

    // Next button click handler
    nextButton.addEventListener('click', () => {
        if (currentIndex >= slides.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentIndex + 1);
        }
    });

    // Previous button click handler
    prevButton.addEventListener('click', () => {
        if (currentIndex <= 0) {
            goToSlide(slides.length - 1);
        } else {
            goToSlide(currentIndex - 1);
        }
    });

    function goToSlide(index) {
        track.style.transform = `translateX(-${slideWidth * index}px)`;

        // Update indicators
        document.querySelectorAll('.indicator').forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        currentIndex = index;
    }

    // Auto advance slides every 5 seconds
    setInterval(() => {
        if (currentIndex >= slides.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentIndex + 1);
        }
    }, 5000);
}

// Function to animate elements when they enter the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Function to handle contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // In a real implementation, you'd send this data to a server-side script
        // For now, just simulate a successful submission

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate server delay
        setTimeout(() => {
            // Reset form
            contactForm.reset();

            // Show success message
            const formContainer = contactForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! We\'ll be in touch soon.';
            formContainer.appendChild(successMessage);

            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }, 1500);
    });
}