// Enhanced Nature's Divinity JavaScript

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
    once: true,
    offset: 100
});

// Divine Themes Data
const divineThemes = [
    {
        id: 'enchanted-forest',
        title: 'Enchanted Forest',
        description: 'Mystical woodlands where ancient spirits dance through ethereal mist and golden sunbeams.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
        icon: '🌲'
    },
    {
        id: 'celestial-mountains',
        title: 'Celestial Mountains',
        description: 'Majestic peaks that touch the heavens, crowned with divine light and eternal snow.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #667db6 0%, #0082c8 100%)',
        icon: '⛰️'
    },
    {
        id: 'sacred-waters',
        title: 'Sacred Waters',
        description: 'Tranquil lakes and flowing rivers that reflect the soul of Mother Earth in perfect harmony.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        icon: '💧'
    },
    {
        id: 'divine-meadows',
        title: 'Divine Meadows',
        description: 'Endless fields of wildflowers swaying in celestial breezes under painted skies.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        icon: '🌸'
    },
    {
        id: 'mystical-aurora',
        title: 'Mystical Aurora',
        description: 'Dancing lights that paint the night sky with colors beyond earthly imagination.',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '🌌'
    },
    {
        id: 'golden-desert',
        title: 'Golden Desert',
        description: 'Infinite dunes sculpted by time, where silence speaks the language of eternity.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        gradient: 'linear-gradient(135deg, #d4af37 0%, #ffd700 100%)',
        icon: '🏜️'
    }
];

// Gallery Data
const galleryImages = [
    {
        id: 'forest-path',
        title: 'Ethereal Path',
        description: 'A mystical journey through ancient woods',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'mountain-lake',
        title: 'Mirror of Heaven',
        description: 'Perfect reflection of divine peaks',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'sunset-ocean',
        title: 'Golden Hour',
        description: 'When sky meets sea in divine harmony',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'field-flowers',
        title: 'Wildflower Dreams',
        description: 'Nature\'s carpet of endless beauty',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'aurora-night',
        title: 'Celestial Dance',
        description: 'Northern lights painting the cosmos',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'desert-dunes',
        title: 'Infinite Sands',
        description: 'Golden waves frozen in time',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

// Inspirational Quotes
const divineQuotes = [
    {
        text: "In every walk with nature, one receives far more than they seek.",
        author: "John Muir"
    },
    {
        text: "Nature does not hurry, yet everything is accomplished.",
        author: "Lao Tzu"
    },
    {
        text: "The earth has music for those who listen.",
        author: "George Santayana"
    },
    {
        text: "In nature, nothing exists alone.",
        author: "Rachel Carson"
    },
    {
        text: "Heaven is under our feet as well as over our heads.",
        author: "Henry David Thoreau"
    },
    {
        text: "Nature always wears the colors of the spirit.",
        author: "Ralph Waldo Emerson"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeParallax();
    loadDivineThemes();
    loadGallery();
    initializeQuoteRotation();
    initializeScrollEffects();
    initializeFloatingElements();
    initializeThemeRandomizer();
});

// Particle System
function initializeParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
    
    // Continuously create new particles
    setInterval(() => {
        if (container.children.length < particleCount) {
            createParticle(container);
        }
    }, 2000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 6 + 2;
    const opacity = Math.random() * 0.5 + 0.3;
    const duration = Math.random() * 10 + 15;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: ${opacity};
        animation-duration: ${duration}s;
        animation-delay: ${Math.random() * 2}s;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, (duration + 2) * 1000);
}

// Navigation Effects
function initializeNavigation() {
    const navbar = document.getElementById('mainNav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Parallax Effects
function initializeParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled < heroHeight) {
            parallaxLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.1;
                layer.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
}

// Load Divine Themes
function loadDivineThemes() {
    const container = document.getElementById('themesContainer');
    
    divineThemes.forEach((theme, index) => {
        const themeCard = createThemeCard(theme, index);
        container.appendChild(themeCard);
    });
}

function createThemeCard(theme, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    col.setAttribute('data-aos', 'fade-up');
    col.setAttribute('data-aos-delay', (index * 200).toString());
    
    col.innerHTML = `
        <div class="theme-card" data-theme="${theme.id}">
            <div class="theme-image">
                <img src="${theme.image}" alt="${theme.title}" class="img-fluid">
                <div class="theme-overlay">
                    <div class="theme-icon">${theme.icon}</div>
                </div>
            </div>
            <div class="theme-content">
                <h3 class="theme-title">${theme.title}</h3>
                <p class="theme-description">${theme.description}</p>
                <button class="theme-btn" onclick="exploreTheme('${theme.id}')">
                    Explore Sacred Realm
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Load Gallery
function loadGallery() {
    const container = document.getElementById('galleryGrid');
    
    galleryImages.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        container.appendChild(galleryItem);
    });
}

function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-aos', 'zoom-in');
    item.setAttribute('data-aos-delay', (index * 100).toString());
    
    item.innerHTML = `
        <img src="${image.image}" alt="${image.title}" class="img-fluid">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h4>${image.title}</h4>
                <p>${image.description}</p>
            </div>
        </div>
    `;
    
    item.addEventListener('click', () => {
        openImageModal(image);
    });
    
    return item;
}

// Quote Rotation
function initializeQuoteRotation() {
    const quoteText = document.getElementById('dynamicQuote');
    const quoteAuthor = document.getElementById('quoteAuthor');
    let currentQuoteIndex = 0;
    
    function rotateQuote() {
        const quote = divineQuotes[currentQuoteIndex];
        
        // Fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = `"${quote.text}"`;
            quoteAuthor.textContent = `- ${quote.author}`;
            
            // Fade in
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 500);
        
        currentQuoteIndex = (currentQuoteIndex + 1) % divineQuotes.length;
    }
    
    // Rotate every 8 seconds
    setInterval(rotateQuote, 8000);
}

// Scroll Effects
function initializeScrollEffects() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger special animations for specific sections
                if (entry.target.id === 'themes') {
                    animateThemeCards();
                } else if (entry.target.id === 'gallery') {
                    animateGalleryItems();
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Animate Theme Cards
function animateThemeCards() {
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, index * 200);
    });
}

// Animate Gallery Items
function animateGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(1)';
            item.style.opacity = '1';
        }, index * 100);
    });
}

// Floating Elements
function initializeFloatingElements() {
    createFloatingLeaves();
    createFloatingOrbs();
}

function createFloatingLeaves() {
    const leaves = ['🍃', '🌿', '🍂', '🌱', '🍀', '🌾'];
    const body = document.body;
    
    setInterval(() => {
        if (document.querySelectorAll('.floating-leaf').length < 15) {
            const leaf = document.createElement('div');
            leaf.className = 'mystical-leaf';
            leaf.innerHTML = leaves[Math.floor(Math.random() * leaves.length)];
            leaf.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: ${Math.random() * 2 + 1}rem;
                opacity: ${Math.random() * 0.7 + 0.3};
                pointer-events: none;
                z-index: 1;
                animation: leafFloat ${Math.random() * 10 + 15}s linear forwards;
            `;
            
            body.appendChild(leaf);
            
            // Remove leaf after animation
            setTimeout(() => {
                if (leaf.parentNode) {
                    leaf.parentNode.removeChild(leaf);
                }
            }, (Math.random() * 10 + 15) * 1000);
        }
    }, 3000);
}

// CSS for leaf animation (added dynamically)
const leafStyle = document.createElement('style');
leafStyle.textContent = `
    @keyframes leafFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(leafStyle);

function createFloatingOrbs() {
    const orbContainer = document.querySelector('.floating-orbs');
    if (!orbContainer) return;
    
    // Add more dynamic orbs
    for (let i = 6; i <= 10; i++) {
        const orb = document.createElement('div');
        orb.className = `orb orb-${i}`;
        orb.style.cssText = `
            width: ${Math.random() * 60 + 40}px;
            height: ${Math.random() * 60 + 40}px;
            background: linear-gradient(135deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 80%));
            top: ${Math.random() * 80}%;
            left: ${Math.random() * 80}%;
            animation-delay: ${Math.random() * 20}s;
        `;
        orbContainer.appendChild(orb);
    }
}

// Theme Randomizer
function initializeThemeRandomizer() {
    const additionalThemes = [
        {
            title: 'Autumn Symphony',
            description: 'Golden leaves dancing in harmony with the whispers of changing seasons.',
            gradient: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)',
            icon: '🍁'
        },
        {
            title: 'Winter\'s Grace',
            description: 'Pristine snowscapes where silence speaks louder than words.',
            gradient: 'linear-gradient(135deg, #90e0ef 0%, #caf0f8 100%)',
            icon: '❄️'
        },
        {
            title: 'Spring Awakening',
            description: 'Cherry blossoms painting the world in delicate pink poetry.',
            gradient: 'linear-gradient(135deg, #ffafcc 0%, #ffc8dd 100%)',
            icon: '🌸'
        },
        {
            title: 'Summer Solstice',
            description: 'Sun-kissed meadows alive with the symphony of buzzing life.',
            gradient: 'linear-gradient(135deg, #ff9e6d 0%, #ffbe0b 100%)',
            icon: '🌻'
        },
        {
            title: 'Cosmic Gardens',
            description: 'Where terrestrial beauty meets celestial wonder in perfect harmony.',
            gradient: 'linear-gradient(135deg, #7209b7 0%, #a663cc 100%)',
            icon: '🌠'
        },
        {
            title: 'Volcanic Majesty',
            description: 'Raw power of Earth\'s creation sculpting landscapes of fire and stone.',
            gradient: 'linear-gradient(135deg, #d62d20 0%, #ffa700 100%)',
            icon: '🌋'
        }
    ];
    
    // Randomly replace some themes
    const themeCards = document.querySelectorAll('.theme-card');
    themeCards.forEach((card, index) => {
        if (Math.random() > 0.5 && index < additionalThemes.length) {
            const newTheme = additionalThemes[index];
            updateThemeCard(card, newTheme);
        }
    });
}

function updateThemeCard(card, theme) {
    const title = card.querySelector('.theme-title');
    const description = card.querySelector('.theme-description');
    const overlay = card.querySelector('.theme-overlay');
    
    if (title) title.textContent = theme.title;
    if (description) description.textContent = theme.description;
    if (overlay) {
        overlay.innerHTML = `<div class="theme-icon">${theme.icon}</div>`;
        overlay.style.background = `linear-gradient(to bottom, transparent, ${theme.gradient.match(/,\s*([^)]+)\)/)[1]})`;
    }
    
    // Add hover effect with theme gradient
    card.style.setProperty('--theme-gradient', theme.gradient);
    card.addEventListener('mouseenter', () => {
        card.style.background = theme.gradient;
        card.style.opacity = '0.9';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.1)';
        card.style.opacity = '1';
    });
}

// Interactive Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function exploreTheme(themeId) {
    // Create modal or redirect to theme page
    showThemeModal(themeId);
}

function showThemeModal(themeId) {
    const theme = divineThemes.find(t => t.id === themeId);
    if (!theme) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'divine-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${theme.title}</h3>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${theme.image}" alt="${theme.title}" class="modal-image">
                <div class="modal-text">
                    <p>${theme.description}</p>
                    <div class="modal-features">
                        <div class="feature">
                            <i class="fas fa-camera"></i>
                            <span>High-resolution galleries</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-headphones"></i>
                            <span>Ambient nature sounds</span>
                        </div>
                        <div class="feature">
                            <i class="fas fa-meditation"></i>
                            <span>Guided meditation sessions</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="divine-btn primary-btn" onclick="startExperience('${theme.id}')">
                    Begin Experience
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .divine-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: modalFadeIn 0.3s ease;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(20px);
        }
        
        .modal-content {
            position: relative;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 25px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow: hidden;
            animation: modalSlideIn 0.3s ease;
        }
        
        .modal-header {
            padding: 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            color: white;
            font-family: 'Playfair Display', serif;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            transition: opacity 0.3s ease;
        }
        
        .modal-close:hover {
            opacity: 0.7;
        }
        
        .modal-body {
            padding: 2rem;
            color: white;
        }
        
        .modal-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 1.5rem;
        }
        
        .modal-features {
            margin-top: 1.5rem;
        }
        
        .feature {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .feature i {
            margin-right: 1rem;
            color: gold;
        }
        
        .modal-footer {
            padding: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }
        
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes modalSlideIn {
            from { transform: translateY(-50px) scale(0.9); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.divine-modal');
    if (modal) {
        modal.style.animation = 'modalFadeIn 0.3s ease reverse';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function startExperience(themeId) {
    closeModal();
    // Implement experience logic here
    showNotification(`Starting ${themeId.replace('-', ' ')} experience...`);
}

function openImageModal(image) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="closeImageModal()"></div>
        <div class="image-modal-content">
            <button class="modal-close" onclick="closeImageModal()">&times;</button>
            <img src="${image.image}" alt="${image.title}" class="modal-full-image">
            <div class="image-info">
                <h4>${image.title}</h4>
                <p>${image.description}</p>
            </div>
        </div>
    `;
    
    const imageModalStyle = document.createElement('style');
    imageModalStyle.textContent = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: modalFadeIn 0.3s ease;
        }
        
        .image-modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            animation: modalSlideIn 0.3s ease;
        }
        
        .modal-full-image {
            width: 100%;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }
        
        .image-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            color: white;
            padding: 2rem;
            border-radius: 0 0 15px 15px;
        }
        
        .image-info h4 {
            font-family: 'Playfair Display', serif;
            margin-bottom: 0.5rem;
        }
    `;
    
    document.head.appendChild(imageModalStyle);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.style.animation = 'modalFadeIn 0.3s ease reverse';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'divine-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Advanced Scroll Effects
function initializeAdvancedScrollEffects() {
    // Smooth reveal animations
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Weather Integration (placeholder for future enhancement)
function initializeWeatherEffects() {
    // This could integrate with weather APIs to change themes based on current weather
    const weatherEffects = {
        sunny: () => addGoldenOverlay(),
        rainy: () => addRainEffect(),
        snowy: () => addSnowEffect(),
        cloudy: () => addMistyEffect()
    };
    
    // For demo, randomly apply an effect
    const effects = Object.values(weatherEffects);
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setTimeout(randomEffect, 2000);
}

function addGoldenOverlay() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(overlay);
}

// Initialize advanced features
setTimeout(() => {
    initializeAdvancedScrollEffects();
    initializeWeatherEffects();
}, 1000);

// Newsletter subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('Thank you for joining our divine journey! 🌿');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    }
});

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Throttle scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // 60fps
    });
}

// Initialize performance optimizations
setTimeout(optimizePerformance, 500);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.exploreTheme = exploreTheme;
window.closeModal = closeModal;
window.closeImageModal = closeImageModal;
window.startExperience = startExperience;