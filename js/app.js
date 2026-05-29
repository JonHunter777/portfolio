document.addEventListener('DOMContentLoaded', () => {
    // --- Header & Scroll ---
    const header = document.getElementById('header');
    
    // Initial hero animation timing
    setTimeout(() => {
        header.classList.add('visible');
    }, 1200);

    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) heroContent.classList.add('loaded');
    }, 2000);

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.position = 'fixed';
        } else {
            header.classList.remove('scrolled');
            header.style.position = 'absolute';
        }

        const hero = document.getElementById('hero');
        if (hero) {
            let opacity = 1 - (window.scrollY / (window.innerHeight * 0.8));
            hero.style.opacity = Math.max(opacity, 0);
        }
    });

    // --- Burger Menu ---
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    burger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !burger.contains(e.target)) {
            toggleMenu();
        }
        
        // Close popups if clicked outside
        if (!e.target.closest('.contact-btn')) {
            document.querySelectorAll('.contact-popup.active').forEach(p => p.classList.remove('active'));
        }
    });

    // --- Contact Popups ---
    const contactBtns = document.querySelectorAll('.contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const popup = btn.querySelector('.contact-popup');
            if (!popup) return;
            
            const isActive = popup.classList.contains('active');
            
            // Close all other popups
            document.querySelectorAll('.contact-popup.active').forEach(p => p.classList.remove('active'));
            
            if (!isActive) {
                popup.classList.add('active');
            }
        });
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // If target is sticky hero, just scroll to top
                if (targetId === '#hero') {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                }
                
                const headerOffset = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // For progress bars
                if (entry.target.classList.contains('lang-bar-container')) {
                    const progressBar = entry.target.querySelector('.lang-progress');
                    if(progressBar) progressBar.style.width = progressBar.getAttribute('data-width');
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .about-video-wrapper').forEach((el, index) => {
        // Add slight stagger delay if it's a grid item (simple approximation)
        if (el.classList.contains('skill-card') || el.classList.contains('soft-skill-card')) {
             el.style.transitionDelay = `${(index % 5) * 0.1}s`;
        }
        observer.observe(el);
    });

    // --- Translations ---
    const translations = {
        ua: {
            'nav-about': 'Про мене',
            'nav-skills': 'Навички',
            'nav-experience': 'Досвід',
            'nav-education': 'Освіта',
            'hero-label': 'Frontend Developer',
            'hero-title': 'ТАЛАВИРЯ ІВАН',
            'hero-subtitle': 'Junior який кодить, вчиться і запускає',
            'hero-btn': 'Зв\'язатись',
            'about-title': 'Про мене',
            'about-text': 'Шукаю позицію, де можу застосувати технічні навички верстки та вміння працювати з контентом. Маю досвід самостійної роботи над веб-проєктами, регулярно використовую AI-інструменти. Швидко навчаюся новому, вмію самостійно знаходити рішення нестандартних задач.',
            'soft-1': 'Аналітичне мислення',
            'soft-2': 'Швидке навчання',
            'soft-3': 'Легкість у спілкуванні',
            'soft-4': 'Готовність до викликів',
            'soft-5': 'Орієнтація на результат',
            'skills-title': 'Навички',
            'lang-title': 'Мови / Languages',
            'lang-ua': 'Українська',
            'lang-ru': 'Російська',
            'lang-en': 'Англійська',
            'experience-title': 'Досвід',
            'exp-1-company': 'МІСТО.UA | Frontend-розробник (волонтер)',
            'exp-1-desc-1': 'Верстав інтерфейси за макетами: адаптивна верстка, валідація форм',
            'exp-1-desc-2': 'Писав JS-логіку (Vanilla JS) для інтерактивних компонентів порталу',
            'exp-1-desc-3': 'Працював у команді через Telegram, здавав задачі в реліз',
            'exp-1-desc-4': 'Медичний портал — реальний продукт з живим трафіком (SEO-орієнтований)',
            'exp-2-company': 'Агро компанія "Агро-Країна" | Ведучий менеджер з продажу',
            'exp-2-desc-1': 'Активний продаж сільськогосподарської продукції та обладнання',
            'exp-2-desc-2': 'Робота з клієнтами: консультації, індивідуальний підбір обладнання',
            'exp-2-desc-3': 'Виконання плану продажу та постановка цілей перед командою',
            'exp-2-desc-4': 'CRM-система для аналізу даних та управління клієнтською базою',
            'exp-2-desc-5': 'Навчання співробітників, підвищення їх кваліфікації',
            'exp-2-desc-6': 'Розвиток рекламних кампаній для просування бренду',
            'education-title': 'Освіта',
            'edu-1-name': 'Український державний університет науки та технологій (УДУНТ)',
            'edu-1-desc': 'Матеріалознавство, магістр | 2019–2024',
            'edu-2-name': 'Дніпровський індустріально-педагогічний фаховий коледж',
            'edu-2-desc': 'Технік-механік | 2013–2019',
            'footer-text': '© 2026 Ivan Talavyria. Built with HTML, CSS & Vanilla JS.'
        },
        en: {
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-experience': 'Experience',
            'nav-education': 'Education',
            'hero-label': 'Frontend Developer',
            'hero-title': 'IVAN TALAVYRIA',
            'hero-subtitle': 'Junior who codes, learns, and ships',
            'hero-btn': 'Contact me',
            'about-title': 'About',
            'about-text': 'Looking for a position where I can apply my layout skills and content work experience. I have experience working independently on web projects and regularly use AI tools. I learn quickly and can find solutions to non-standard tasks on my own.',
            'soft-1': 'Analytical thinking',
            'soft-2': 'Fast learner',
            'soft-3': 'Easy going',
            'soft-4': 'Ready for challenges',
            'soft-5': 'Result oriented',
            'skills-title': 'Skills',
            'lang-title': 'Languages',
            'lang-ua': 'Ukrainian',
            'lang-ru': 'Russian',
            'lang-en': 'English',
            'experience-title': 'Experience',
            'exp-1-company': 'MISTO.UA | Frontend Developer (Volunteer)',
            'exp-1-desc-1': 'Layout interfaces according to designs: responsive layout, form validation',
            'exp-1-desc-2': 'Wrote JS logic (Vanilla JS) for interactive portal components',
            'exp-1-desc-3': 'Worked in a team via Telegram, delivered tasks to release',
            'exp-1-desc-4': 'Medical portal - real product with live traffic (SEO-oriented)',
            'exp-2-company': 'Agro company "Agro-Kraina" | Lead Sales Manager',
            'exp-2-desc-1': 'Active sales of agricultural products and equipment',
            'exp-2-desc-2': 'Working with clients: consultations, individual equipment selection',
            'exp-2-desc-3': 'Fulfilling sales plans and setting goals for the team',
            'exp-2-desc-4': 'CRM system for data analysis and client base management',
            'exp-2-desc-5': 'Employee training, skill improvement',
            'exp-2-desc-6': 'Development of advertising campaigns to promote the brand',
            'education-title': 'Education',
            'edu-1-name': 'Ukrainian State University of Science and Technologies',
            'edu-1-desc': 'Materials Science, Master\'s degree | 2019–2024',
            'edu-2-name': 'Dnipro Industrial and Pedagogical Professional College',
            'edu-2-desc': 'Mechanical Technician | 2013–2019',
            'footer-text': '© 2026 Ivan Talavyria. Built with HTML, CSS & Vanilla JS.'
        }
    };

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            localStorage.setItem('lang', lang);
        });
    });

    const savedLang = localStorage.getItem('lang') || 'ua';
    const savedLangBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedLangBtn) savedLangBtn.click();

    const canvas = document.getElementById('wave-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let waveOffset = 0;
        let waveAnimId;

        function drawWaves() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const lineCount = 40;
            const spacing = canvas.height / lineCount;
            const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
            const amplitude = 25 + (window.scrollY / maxScroll) * 20;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 0.8;
            for (let i = 0; i < lineCount; i++) {
                const baseY = spacing * i + spacing / 2;
                ctx.beginPath();
                for (let x = 0; x <= canvas.width; x += 2) {
                    const y = baseY + amplitude * Math.sin(x * 0.008 + waveOffset + i * 0.4);
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            waveOffset += 0.008;
        }

        function waveAnimate() {
            if (!document.hidden) drawWaves();
            waveAnimId = requestAnimationFrame(waveAnimate);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(waveAnimId);
            else waveAnimate();
        });

        waveAnimate();
    }
});
