/* ========================================
   MODERN LANDING PAGE - JAVASCRIPT
   Author: Matheus Ventura
   Version: 1.0
   ======================================== */

// ========== SHOW MENU MOBILE ==========
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// ========== REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ========== CHANGE BACKGROUND HEADER ==========
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ========== SHOW SCROLL UP ==========
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.add('active-link');
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']')?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ========== DARK/LIGHT THEME ==========
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check for saved user preference, if any, on load
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save user preference to localStorage
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
});

// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== ANIMATE ON SCROLL (AOS) INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100,
            delay: 0,
        });
    }
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });
});

// ========== FLOATING CARDS PARALLAX EFFECT ==========
window.addEventListener('mousemove', (e) => {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach(card => {
        const speed = card.dataset.speed || 5;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        card.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// ========== TYPING EFFECT FOR HERO TITLE (OPTIONAL) ==========
function createTypingEffect() {
    const titleElement = document.querySelector('.hero__title .gradient-text');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.opacity = '1';
    
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < text.length) {
            titleElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 100);
        }
    }
    
    // Uncomment to enable typing effect
    // setTimeout(typeChar, 500);
}

// ========== COUNTER ANIMATION FOR STATS ==========
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;
                
                // Extract number from text (handles formats like "50k+", "99.9%", "4.9/5")
                const match = target.match(/[\d.]+/);
                if (!match) return;
                
                const targetValue = parseFloat(match[0]);
                const suffix = target.replace(/[\d.]+/, '');
                const duration = 2000; // 2 seconds
                const increment = targetValue / (duration / 16); // 60fps
                let current = 0;
                
                counter.textContent = '0' + suffix;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < targetValue) {
                        counter.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// ========== FORM VALIDATION (IF YOU ADD A FORM) ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form elements
        const submitBtn = document.getElementById('submit-btn');
        const buttonText = submitBtn.querySelector('.button__text');
        const buttonLoading = submitBtn.querySelector('.button__loading');
        const formMessage = document.getElementById('form-message');
        
        // Get form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Clear previous errors
        document.querySelectorAll('.form__error').forEach(error => {
            error.classList.remove('show');
            error.textContent = '';
        });
        document.querySelectorAll('.form__input, .form__textarea, .form__select').forEach(input => {
            input.classList.remove('error');
        });
        formMessage.style.display = 'none';
        
        // Validation
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim().length < 3) {
            showError('name', 'Nome deve ter pelo menos 3 caracteres');
            isValid = false;
        }
        
        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError('email', 'Por favor, insira um email válido');
            isValid = false;
        }
        
        // Subject validation
        if (!subjectInput.value) {
            showError('subject', 'Por favor, selecione um assunto');
            isValid = false;
        }
        
        // Message validation
        if (messageInput.value.trim().length < 10) {
            showError('message', 'Mensagem deve ter pelo menos 10 caracteres');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        buttonText.style.display = 'none';
        buttonLoading.style.display = 'flex';
        
        try {
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Success message
                formMessage.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
                formMessage.className = 'form__message success';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(data.message || 'Erro ao enviar mensagem');
            }
        } catch (error) {
            // Error message
            formMessage.textContent = '❌ Erro ao enviar mensagem. Por favor, tente novamente.';
            formMessage.className = 'form__message error';
            formMessage.style.display = 'block';
            
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            buttonText.style.display = 'inline';
            buttonLoading.style.display = 'none';
        }
    });
}

// Helper function to show error
function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    
    if (input && error) {
        input.classList.add('error');
        error.textContent = message;
        error.classList.add('show');
    }
}

// Real-time validation on input
if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form__input, .form__textarea, .form__select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const fieldId = this.id;
            
            // Remove error on valid input
            if (this.value.trim()) {
                this.classList.remove('error');
                const error = document.getElementById(`${fieldId}-error`);
                if (error) {
                    error.classList.remove('show');
                }
            }
        });
        
        // Real-time email validation
        if (input.type === 'email') {
            input.addEventListener('input', function() {
                if (this.value && validateEmail(this.value)) {
                    this.classList.remove('error');
                    const error = document.getElementById('email-error');
                    if (error) {
                        error.classList.remove('show');
                    }
                }
            });
        }
    });
}

// Phone mask (optional)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 2) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
            }
        }
        
        e.target.value = value;
    });
}

// Example form handling (LEGACY - Keep for backwards compatibility)
const forms = document.querySelectorAll('form:not(#contact-form)');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        
        if (emailInput && !validateEmail(emailInput.value)) {
            alert('Por favor, insira um e-mail válido.');
            emailInput.focus();
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted successfully!');
        alert('Obrigado! Entraremos em contato em breve.');
        form.reset();
    });
});

// ========== PRICING CARD INTERACTION ==========
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add pulse effect to button
        const button = card.querySelector('.button');
        if (button) {
            button.style.animation = 'pulse 0.5s ease-in-out';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const button = card.querySelector('.button');
        if (button) {
            button.style.animation = '';
        }
    });
});

// ========== TESTIMONIAL CARD TILT EFFECT (3D) ==========
function addTiltEffect() {
    const cards = document.querySelectorAll('.testimonial-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Initialize tilt effect on desktop only
if (window.innerWidth > 768) {
    addTiltEffect();
}

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use debounced scroll for better performance
window.addEventListener('scroll', debounce(() => {
    scrollHeader();
    scrollUp();
    scrollActive();
}));

// ========== LAZY LOADING IMAGES (IF YOU ADD MORE IMAGES) ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== CONSOLE WELCOME MESSAGE ==========
console.log(
    '%c🚀 Landing Page Moderna',
    'color: #6366f1; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cDesenvolvida com ❤️ usando HTML, CSS e JavaScript',
    'color: #8b5cf6; font-size: 14px;'
);

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Initialize all animations after page load
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});

// ========== PREVENT ANIMATIONS ON PAGE RESIZE ==========
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
