// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Language Toggle
const langToggle = document.getElementById('lang-toggle');
let isArabic = false;

const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-goals': 'Goals',
        'nav-programs': 'Programs',
        'nav-app': 'Mobile App',
        'nav-contact': 'Contact',
        'lang-btn': 'عربي',
        'hero-title-main': 'Shamma Initiative',
        'hero-title-arabic': 'مبادرة الشيخة شما',
        'hero-subtitle': 'Environmental community platform focused on tree planting and recycling culture, targeting youth and children within the framework of UAE Vision 2030 for environmental sustainability.',
        'download-app': 'Download App',
        'learn-more': 'Learn More'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'حول المبادرة',
        'nav-goals': 'الأهداف',
        'nav-programs': 'البرامج',
        'nav-app': 'التطبيق',
        'nav-contact': 'تواصل معنا',
        'lang-btn': 'English',
        'hero-title-main': 'مبادرة الشيخة شما',
        'hero-title-arabic': 'Shamma Initiative',
        'hero-subtitle': 'منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'download-app': 'تحميل التطبيق',
        'learn-more': 'اعرف المزيد'
    }
};

langToggle.addEventListener('click', () => {
    isArabic = !isArabic;
    const lang = isArabic ? 'ar' : 'en';
    
    // Update text direction
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update navigation links
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach((item, index) => {
        const keys = ['nav-home', 'nav-about', 'nav-goals', 'nav-programs', 'nav-app', 'nav-contact'];
        if (translations[lang][keys[index]]) {
            item.textContent = translations[lang][keys[index]];
        }
    });
    
    // Update language button
    langToggle.textContent = translations[lang]['lang-btn'];
    
    // Update hero section
    const heroTitleMain = document.querySelector('.title-main');
    const heroTitleArabic = document.querySelector('.title-arabic');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitleMain) heroTitleMain.textContent = translations[lang]['hero-title-main'];
    if (heroTitleArabic) heroTitleArabic.textContent = translations[lang]['hero-title-arabic'];
    if (heroSubtitle) heroSubtitle.textContent = translations[lang]['hero-subtitle'];
    
    // Update buttons
    const downloadBtn = document.querySelector('.btn-primary');
    const learnMoreBtn = document.querySelector('.btn-secondary');
    
    if (downloadBtn) downloadBtn.textContent = translations[lang]['download-app'];
    if (learnMoreBtn) learnMoreBtn.textContent = translations[lang]['learn-more'];
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.goal-card, .timeline-item, .stat-item, .about-text, .about-image');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form Submission
const volunteerForm = document.querySelector('.form');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(volunteerForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        const requiredFields = volunteerForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#dc3545';
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            // Show success message
            const submitBtn = volunteerForm.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Thank you! We\'ll be in touch.';
            submitBtn.style.background = '#28a745';
            
            // Reset form
            setTimeout(() => {
                volunteerForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
        } else {
            // Show error message
            alert('Please fill in all required fields.');
        }
    });
}

// Counter Animation for Stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-item h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const suffix = counter.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// App Store Button Click Tracking
const appStoreButtons = document.querySelectorAll('.app-badge, .app-download-btn');
appStoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Determine which store
        const isAppStore = button.querySelector('img').src.includes('app-store');
        const store = isAppStore ? 'App Store' : 'Google Play';
        
        // Show coming soon message
        alert(`The Shamma Initiative app will be available on ${store} soon! Stay tuned for updates.`);
        
        // In a real implementation, you would redirect to the actual app store links
        // window.open(isAppStore ? 'https://apps.apple.com/...' : 'https://play.google.com/...', '_blank');
    });
});

// Social Media Link Tracking
const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get social platform from classes or icon
        const platform = link.className.includes('instagram') ? 'Instagram' :
                         link.className.includes('twitter') ? 'Twitter' :
                         link.className.includes('facebook') ? 'Facebook' :
                         link.className.includes('tiktok') ? 'TikTok' :
                         link.className.includes('youtube') ? 'YouTube' :
                         link.className.includes('linkedin') ? 'LinkedIn' : 'Social Media';
        
        // Show message about following
        alert(`Follow @shmma_initiative on ${platform} for the latest updates!`);
        
        // In a real implementation, you would redirect to actual social media pages
        // window.open('https://instagram.com/shmma_initiative', '_blank');
    });
});

// Parallax Effect for Hero Section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroImage = document.querySelector('.hero-image img');
    
//     if (heroImage) {
//         const rate = scrolled * -0.5;
//         heroImage.style.transform = `translateY(${rate}px)`;
//     }
// });

// Loading Screen (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Touch Support for Mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger some action
            console.log('Swiped up');
        } else {
            // Swipe down - could trigger some action
            console.log('Swiped down');
        }
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

