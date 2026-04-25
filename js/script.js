/* ============================================
   AQUAPRESTIGE PISCINE - JAVASCRIPT
   Interactions et Fonctionnalités Premium
   ============================================ */

/**
 * Initialisation de l'application au chargement du DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Fonction principale d'initialisation
 */
function initializeApp() {
    setupSmoothScrolling();
    setupContactForm();
    setupDiagnosticPreset();
    setupFloatingContactBar();
    setupHeroMediaFallback();
    setupScrollAnimations();
}

/* ============================================
   PRÉ-COCHAGE "DIAGNOSTIC" DEPUIS UN BOUTON
   ============================================ */
function setupDiagnosticPreset() {
    document.querySelectorAll('[data-preset="diagnostic"]').forEach(function(link) {
        link.addEventListener('click', function() {
            // Laisse le scroll s'effectuer, puis coche la case
            setTimeout(function() {
                var cb = document.getElementById('cb-diagnostic');
                if (cb) cb.checked = true;
            }, 500);
        });
    });
}

/* ============================================
   SCROLLING FLUIDE AVEC DÉCALAGE
   ============================================ */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Vérifier que le lien est une ancre valide
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Scroll avec décalage pour la barre sticky
                const offsetTop = Math.max(target.getBoundingClientRect().top + window.scrollY - 100, 0);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   GESTION DE LA BARRE FLOTTANTE DE CONTACT
   ============================================ */
function setupFloatingContactBar() {
    const contactBar = document.querySelector('.floating-contact-bar');
    
    if (!contactBar) return;

    // Coordonnées (href déjà définis en HTML, on s'assure juste du tel et whatsapp)
    const contactInfo = {
        phone: '+33609099516',
        whatsapp: '33609099516'
    };

    const phoneLink = document.querySelector('.contact-call');
    const whatsappLink = document.querySelector('.contact-whatsapp');

    if (phoneLink) phoneLink.href = `tel:${contactInfo.phone}`;
    if (whatsappLink) whatsappLink.href = `https://wa.me/${contactInfo.whatsapp}`;

    // Afficher/masquer la barre selon le scroll (optionnel)
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < 100) {
            // En haut de la page
            contactBar.style.opacity = '0.8';
        } else {
            // Ailleurs
            contactBar.style.opacity = '1';
        }
    });
}

/* ============================================
   FALLBACK MEDIA HERO
   ============================================ */
function setupHeroMediaFallback() {
    const hero = document.querySelector('.hero');
    const heroVideo = document.querySelector('.hero-video');

    if (!hero || !heroVideo) return;

    const fallbackImage = 'assets/images/gallery/aquaprestige_normandie.jpg';
    hero.style.background = `linear-gradient(rgba(2, 46, 75, 0.38), rgba(2, 46, 75, 0.38)), url("${fallbackImage}") center/cover no-repeat`;

    heroVideo.addEventListener('error', function() {
        hero.classList.add('hero-video-unavailable');
    });

    const attemptPlayback = heroVideo.play();
    if (attemptPlayback && typeof attemptPlayback.catch === 'function') {
        attemptPlayback.catch(function() {
            hero.classList.add('hero-video-unavailable');
        });
    }
}

/* ============================================
   GESTION DU FORMULAIRE DE CONTACT
   ============================================ */
function setupContactForm() {
    const form = document.getElementById('contact-form-element');
    const successMessage = document.getElementById('form-success');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmit(form, successMessage);
    });
}

/**
 * Traitement de la soumission du formulaire
 * @param {HTMLFormElement} form - Le formulaire
 * @param {HTMLElement} successMessage - Message de succès
 */
function handleContactSubmit(form, successMessage) {
    // Récupérer les données du formulaire
    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email') || 'non fourni',
        services: formData.getAll('services') || [],
        message: formData.get('message') || ''
    };

    // Validation minimale
    if (!data.name || !data.phone) {
        alert('Veuillez remplir au moins le nom et le téléphone.');
        return;
    }

    if (data.services.length === 0) {
        alert('Veuillez sélectionner au moins un service.');
        return;
    }

    // Si vous avez un backend, envoyer les données avec fetch :
    /*
    fetch('votre-api-contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
        showSuccessMessage(form, successMessage);
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
    */

    // Pour maintenant, afficher un message de succès avec localStorage
    // (à remplacer par un vrai backend)
    console.log('Données du formulaire:', data);
    
    // Simuler l'envoi
    form.style.display = 'none';
    successMessage.style.display = 'block';

    // Réinitialiser le formulaire
    form.reset();

    // Revenir au formulaire après 5 secondes
    setTimeout(() => {
        form.style.display = 'block';
        successMessage.style.display = 'none';
    }, 5000);
}

/**
 * Afficher le message de succès
 */
function showSuccessMessage(form, successMessage) {
    form.style.display = 'none';
    if (successMessage) {
        successMessage.style.display = 'block';
    }

    // Scroller jusqu'au message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Réinitialiser après 5 secondes
    setTimeout(() => {
        form.style.display = 'block';
        if (successMessage) {
            successMessage.style.display = 'none';
        }
        form.reset();
    }, 5000);
}

/* ============================================
   ANIMATIONS AU SCROLL (Intersection Observer)
   ============================================ */
function setupScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.service-card, .feature, .city-badge').forEach(el => {
            el.classList.add('fade-in');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter une classe d'animation
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les sections et cartes
    document.querySelectorAll('.service-card, .feature, .city-badge').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   UTILITAIRES ET HELPERS
   ============================================ */

/**
 * Copier un texte dans le presse-papiers
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Copié !');
    }).catch(function(err) {
        console.error('Erreur:', err);
    });
}

/**
 * Ouvrir un lien dans une nouvelle fenêtre
 */
function openExternalLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}
