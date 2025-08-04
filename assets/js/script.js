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
        'nav-team': 'Team',
        'nav-app': 'Mobile App',
        'nav-contact': 'Contact',
        'lang-btn': 'عربي',
        'hero-title-main': 'Shamma Initiative',
        'hero-title-arabic': 'مبادرة الشيخة شما',
        'hero-subtitle': 'Environmental community platform focused on tree planting and recycling culture, targeting youth and children within the framework of UAE Vision 2030 for environmental sustainability.',
        'download-app': 'Download App',
        'learn-more': 'Learn More',
        'about-title': 'About the Initiative',
        'about-subtitle': 'Under the patronage of Sheikha Shamma bint Sultan bin Khalifa Al Nahyan',
        'mission-title': 'Our Mission',
        'mission-text': 'The Shamma Initiative is an environmental community platform that aims to spread the culture of tree planting and recycling among community members, especially targeting youth and children, within the framework of UAE Vision 2030 for environmental sustainability.',
        'vision-title': 'Vision 2030',
        'vision-text': 'Aligned with the UAE\'s commitment to environmental sustainability, our initiative contributes to the national vision of creating a greener, more sustainable future for generations to come.',
        'trees-planted': 'Trees Planted',
        'community-members': 'Community Members',
        'schools-engaged': 'Schools Engaged',
        'goals-title': 'Our Goals',
        'goals-subtitle': 'Building a sustainable future for the UAE',
        'goal1-title': 'Raise Awareness',
        'goal1-text': 'Increase awareness about the importance of tree planting as a means to combat desertification and improve air quality',
        'goal2-title': 'Build Strong Institution',
        'goal2-text': 'Create a strong institutional image for the project under Sheikha Shamma\'s name',
        'goal3-title': 'Encourage Participation',
        'goal3-text': 'Promote community participation from individuals and institutions in tree planting and recycling',
        'goal4-title': 'Lead in Tree Planting',
        'goal4-text': 'Become the leading charitable organization specialized in tree planting',
        'goal5-title': 'Promote Recycling',
        'goal5-text': 'Contribute to raising awareness about recycling and its importance to the environment',
        'goal6-title': 'Environmental Impact',
        'goal6-text': 'Create measurable positive environmental impact across the UAE',
        'programs-title': 'Our Programs',
        'programs-subtitle': 'Year-round activities and initiatives',
        'q1-title': 'Launch & Engagement',
        'q2-title': 'Education & Awareness',
        'q3-title': 'Community Expansion',
        'q4-title': 'Recognition & Growth',
        'app-title': 'Download Our Mobile App',
        'app-text': 'Join our community through our interactive mobile application for community participation in tree planting and recycling initiatives.',
        'feature1': 'Share before/after photos',
        'feature2': 'Participate in challenges',
        'feature3': 'Connect with community',
        'feature4': 'Access educational content',
        'team-title': 'Our Team',
        'team-subtitle': 'Dedicated professionals working towards a greener UAE',
        'contact-title': 'Get Involved'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'حول المبادرة',
        'nav-goals': 'الأهداف',
        'nav-programs': 'البرامج',
        'nav-team': 'الفريق',
        'nav-app': 'التطبيق',
        'nav-contact': 'تواصل معنا',
        'lang-btn': 'English',
        'hero-title-main': 'مبادرة الشيخة شما',
        'hero-title-arabic': 'Shamma Initiative',
        'hero-subtitle': 'منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'download-app': 'تحميل التطبيق',
        'learn-more': 'اعرف المزيد',
        'about-title': 'حول المبادرة',
        'about-subtitle': 'تحت رعاية الشيخة شما بنت سلطان بن خليفة آل نهيان',
        'mission-title': 'مهمتنا',
        'mission-text': 'مبادرة الشيخة شما هي منصة مجتمعية بيئية تهدف إلى نشر ثقافة التشجير وإعادة التدوير بين أفراد المجتمع، خاصة فئة الشباب والأطفال، في إطار رؤية الإمارات 2030 للاستدامة البيئية.',
        'vision-title': 'رؤية 2030',
        'vision-text': 'تماشياً مع التزام دولة الإمارات بالاستدامة البيئية، تساهم مبادرتنا في الرؤية الوطنية لخلق مستقبل أكثر خضرة واستدامة للأجيال القادمة.',
        'trees-planted': 'شجرة مزروعة',
        'community-members': 'عضو في المجتمع',
        'schools-engaged': 'مدرسة مشاركة',
        'goals-title': 'أهدافنا',
        'goals-subtitle': 'بناء مستقبل مستدام لدولة الإمارات',
        'goal1-title': 'رفع الوعي',
        'goal1-text': 'زيادة الوعي بأهمية زراعة الأشجار كوسيلة لمكافحة التصحر وتحسين جودة الهواء',
        'goal2-title': 'بناء مؤسسة قوية',
        'goal2-text': 'إنشاء صورة مؤسسية قوية للمشروع تحت اسم الشيخة شما',
        'goal3-title': 'تشجيع المشاركة',
        'goal3-text': 'تعزيز المشاركة المجتمعية من الأفراد والمؤسسات في زراعة الأشجار وإعادة التدوير',
        'goal4-title': 'الريادة في التشجير',
        'goal4-text': 'أن نصبح المنظمة الخيرية الرائدة المتخصصة في زراعة الأشجار',
        'goal5-title': 'تعزيز إعادة التدوير',
        'goal5-text': 'المساهمة في رفع الوعي حول إعادة التدوير وأهميتها للبيئة',
        'goal6-title': 'التأثير البيئي',
        'goal6-text': 'خلق تأثير بيئي إيجابي قابل للقياس في جميع أنحاء دولة الإمارات',
        'programs-title': 'برامجنا',
        'programs-subtitle': 'أنشطة ومبادرات على مدار السنة',
        'q1-title': 'الإطلاق والمشاركة',
        'q2-title': 'التعليم والتوعية',
        'q3-title': 'التوسع المجتمعي',
        'q4-title': 'التقدير والنمو',
        'app-title': 'حمل تطبيقنا المحمول',
        'app-text': 'انضم إلى مجتمعنا من خلال تطبيقنا التفاعلي للمشاركة المجتمعية في مبادرات زراعة الأشجار وإعادة التدوير.',
        'feature1': 'شارك صور قبل وبعد',
        'feature2': 'شارك في التحديات',
        'feature3': 'تواصل مع المجتمع',
        'feature4': 'الوصول للمحتوى التعليمي',
        'team-title': 'فريقنا',
        'team-subtitle': 'محترفون مخصصون للعمل من أجل إمارات أكثر خضرة',
        'contact-title': 'شارك معنا'
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
        const keys = ['nav-home', 'nav-about', 'nav-goals', 'nav-programs', 'nav-team', 'nav-app', 'nav-contact'];
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
    
    // Update About section
    const aboutTitle = document.querySelector('#about .section-title');
    const aboutSubtitle = document.querySelector('#about .section-subtitle');
    const missionTitle = document.querySelector('#about h3:first-of-type');
    const missionText = document.querySelector('#about p:first-of-type');
    const visionTitle = document.querySelector('#about h3:last-of-type');
    const visionText = document.querySelector('#about p:last-of-type');
    
    if (aboutTitle) aboutTitle.textContent = translations[lang]['about-title'];
    if (aboutSubtitle) aboutSubtitle.textContent = translations[lang]['about-subtitle'];
    if (missionTitle) missionTitle.textContent = translations[lang]['mission-title'];
    if (missionText) missionText.textContent = translations[lang]['mission-text'];
    if (visionTitle) visionTitle.textContent = translations[lang]['vision-title'];
    if (visionText) visionText.textContent = translations[lang]['vision-text'];
    
    // Update stats
    const statTexts = document.querySelectorAll('.stat-item p');
    const statKeys = ['trees-planted', 'community-members', 'schools-engaged'];
    statTexts.forEach((stat, index) => {
        if (translations[lang][statKeys[index]]) {
            stat.textContent = translations[lang][statKeys[index]];
        }
    });
    
    // Update Goals section
    const goalsTitle = document.querySelector('#goals .section-title');
    const goalsSubtitle = document.querySelector('#goals .section-subtitle');
    
    if (goalsTitle) goalsTitle.textContent = translations[lang]['goals-title'];
    if (goalsSubtitle) goalsSubtitle.textContent = translations[lang]['goals-subtitle'];
    
    // Update goal cards
    const goalCards = document.querySelectorAll('.goal-card');
    const goalKeys = ['goal1', 'goal2', 'goal3', 'goal4', 'goal5', 'goal6'];
    goalCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const text = card.querySelector('p');
        if (title && translations[lang][goalKeys[index] + '-title']) {
            title.textContent = translations[lang][goalKeys[index] + '-title'];
        }
        if (text && translations[lang][goalKeys[index] + '-text']) {
            text.textContent = translations[lang][goalKeys[index] + '-text'];
        }
    });
    
    // Update Programs section
    const programsTitle = document.querySelector('#programs .section-title');
    const programsSubtitle = document.querySelector('#programs .section-subtitle');
    
    if (programsTitle) programsTitle.textContent = translations[lang]['programs-title'];
    if (programsSubtitle) programsSubtitle.textContent = translations[lang]['programs-subtitle'];
    
    // Update timeline items
    const timelineItems = document.querySelectorAll('.timeline-content h3');
    const timelineKeys = ['q1-title', 'q2-title', 'q3-title', 'q4-title'];
    timelineItems.forEach((item, index) => {
        if (translations[lang][timelineKeys[index]]) {
            item.textContent = translations[lang][timelineKeys[index]];
        }
    });
    
    // Update App section
    const appTitle = document.querySelector('#app h2');
    const appText = document.querySelector('#app .app-text p');
    
    if (appTitle) appTitle.textContent = translations[lang]['app-title'];
    if (appText) appText.textContent = translations[lang]['app-text'];
    
    // Update app features
    const features = document.querySelectorAll('.feature span');
    const featureKeys = ['feature1', 'feature2', 'feature3', 'feature4'];
    features.forEach((feature, index) => {
        if (translations[lang][featureKeys[index]]) {
            feature.textContent = translations[lang][featureKeys[index]];
        }
    });
    
    // Update Team section
    const teamTitle = document.querySelector('#team .section-title');
    const teamSubtitle = document.querySelector('#team .section-subtitle');
    
    if (teamTitle) teamTitle.textContent = translations[lang]['team-title'];
    if (teamSubtitle) teamSubtitle.textContent = translations[lang]['team-subtitle'];
    
    // Update Contact section
    const contactTitle = document.querySelector('#contact .section-title');
    
    if (contactTitle) contactTitle.textContent = translations[lang]['contact-title'];
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
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

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

