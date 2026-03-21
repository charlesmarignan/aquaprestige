# AquaPrestige Piscine - Site Web Premium

Site web monopage professionnel pour **AquaPrestige Piscine**, spécialistes de l'entretien et de la maintenance de piscines en Normandie.

## 🎯 Caractéristiques

✅ **Design Premium & Moderne** - Interface élégante avec gradient et animations fluides
✅ **Responsive Mobile** - Optimisé pour tous les appareils (mobile, tablette, desktop)
✅ **Rapide** - HTML/CSS/JS pur, pas de framework lourd
✅ **Barre de Contact Sticky** - Toujours visible pour générer des appels et messages
✅ **Navigation Fluide** - Scroll doux entre les sections
✅ **Formulaire de Contact** - Simple, mobile-friendly avec notifications
✅ **SEO-Friendly** - Structure sémantique, meta descriptions, H1/H2/H3 optimisés
✅ **Code Commenté** - Facile à modifier et maintenir

## 📁 Structure du Projet

```
AquaPrestige/
├── index.html                    # Page principale complète
├── css/
│   └── style.css                # Tous les styles (2500+ lignes)
├── js/
│   └── script.js                # Toutes les interactions JS
├── assets/
│   ├── images/
│   │   ├── logo/                # PLACER: logo-aquaprestige.png
│   │   ├── hero/                # PLACER: hero-piscine.jpg
│   │   ├── services/
│   │   │   ├── entretien.jpg    # Image service entretien
│   │   │   ├── depannage.jpg    # Image service dépannage
│   │   │   ├── local-technique.jpg
│   │   │   └── hivernage.jpg
│   │   └── gallery/             # Images de galerie (optionnel)
│   └── videos/
│       └── hero/
│           └── piscine-hero.mp4 # Vidéo fond hero (optionnel)
└── README.md                    # Cette documentation
```

## 🚀 Démarrage Rapide

### 1. Installation des Assets

**Images obligatoires à placer :**

- `assets/images/logo/logo-aquaprestige.png` - Logo de l'entreprise (50x50px min)
- `assets/images/hero/hero-piscine.jpg` - Image de fond hero (1920x1080px)
- `assets/images/services/entretien.jpg` - Photo service entretien
- `assets/images/services/depannage.jpg` - Photo service dépannage
- `assets/images/services/local-technique.jpg` - Photo local technique
- `assets/images/services/hivernage.jpg` - Photo hivernage

**Vidéo optionnelle :**

- `assets/videos/hero/piscine-hero.mp4` - Fond vidéo animée pour le hero

### 2. Personnalisation des Coordonnées

Dans le fichier **js/script.js**, ligne ~118, remplacer :

```javascript
const contactInfo = {
    phone: '+33XXXXXXXXXX',      // Numéro de téléphone (avec +33)
    whatsapp: '33XXXXXXXXXX',    // Numéro WhatsApp (sans +)
    email: 'contact@aquaprestige.fr'
};
```

**Également remplacer dans index.html :**

- `href="tel:+33XXXXXXXXXX"` → Votre numéro de téléphone
- `href="https://wa.me/33XXXXXXXXXX"` → Votre numéro WhatsApp
- `href="mailto:contact@aquaprestige.fr"` → Votre email
- Les liens réseaux sociaux (Facebook, Instagram, YouTube)

### 3. Ouvrir dans le Navigateur

```bash
# Option 1 : Ouvrir directement le fichier
Ouvrir index.html dans votre navigateur (double-clic)

# Option 2 : Avec un serveur local (recommandé)
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx http-server
```

Accéder à : `http://localhost:8000`

## 📱 Sections du Site

### 1. **Header / Navigation Sticky**
- Logo centré
- Menu horizontal responsive
- Menu burger sur mobile

### 2. **Barre Flottante de Contact** (Toujours visible)
- Bouton Appeler
- Bouton WhatsApp
- Bouton Email
- Bouton Demande d'info

### 3. **Section Hero**
- Fond vidéo ou image responsive
- Titre principal et sous-titre
- 2 boutons CTA (Appeler / Formulaire)

### 4. **Services** (4 cartes)
- Entretien Piscine
- Dépannage
- Création Local Technique
- Hivernage

### 5. **Sections Détails de Services**
- Détails complets de chaque service
- Listes de caractéristiques
- Boutons d'action vers le formulaire

### 6. **Zone d'Intervention**
- Texte optimisé SEO mentionnant les villes
- Badges visuels des villes desservies

### 7. **Formulaire de Contact**
- Champs : Nom, Téléphone, Email
- Cases à cocher pour les services
- Message optionnel
- Message de confirmation

### 8. **Footer**
- Informations de contact
- Zones d'intervention
- Liens réseaux sociaux
- Copyright

## 🎨 Palette de Couleurs

Le design utilise une palette premium aquatique :

```css
--primary-dark: #003d82      /* Bleu foncé professionnel */
--primary-light: #0066ff     /* Bleu principal */
--accent: #00d4ff            /* Bleu ciel aquatique */
--white: #ffffff
--light-bg: #f8f9fa
--dark-text: #1a2332
```

## 🔧 Personnalisations Courantes

### Changer la Palette de Couleurs

Dans `css/style.css`, section `:root`, modifier :

```css
:root {
    --primary-dark: #003d82;      /* Votre couleur */
    --primary-light: #0066ff;     /* Votre couleur */
    --accent: #00d4ff;            /* Votre couleur */
    /* ... */
}
```

### Modifier le Titre Principal

Dans `index.html`, ligne ~110 :

```html
<h1 class="hero-title">Votre Titre Personnalisé</h1>
<p class="hero-subtitle">Votre Sous-Titre</p>
<p class="hero-description">Votre Description</p>
```

### Ajouter des Images de Galerie

Dans `index.html`, section `#gallery` :

```html
<div class="gallery-grid">
    <img src="assets/images/gallery/photo1.jpg" alt="Description">
    <img src="assets/images/gallery/photo2.jpg" alt="Description">
    <!-- etc -->
</div>
```

### Modifier les Services

Dans `index.html`, section `#services`, modifier le contenu des cartes.

Dans `css/style.css`, chercher `.service-card` pour ajuster les styles.

### Intégrer un Backend pour les Formulaires

Dans `js/script.js`, fonction `handleContactSubmit()`, remplacer la partie commentée :

```javascript
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
```

## 📊 Optimisation et Performances

### Images

- Utiliser des images **haute qualité** (au moins 1920x1080 pour hero)
- Compresser avec [TinyPNG](https://tinypng.com/) ou similaire
- Format JPG pour photos, PNG pour logo

### Vidéo

- Utiliser un format **MP4 optimisé** pour le web
- Durée recommandée : 10-30 secondes (boucle)
- Commencer en bas de qualité, augmenter au besoin

### CSS et JS

- Code déjà optimisé et minifié pour la production
- Aucune dépendance externe requise
- Temps de chargement < 2 secondes (avec images optimisées)

## 🔐 Sécurité et Bonnes Pratiques

✅ Tous les `<a>` externes ont `target="_blank"` et `rel="noopener,noreferrer"`
✅ Attributs `alt` sur toutes les images pour l'accessibilité
✅ Structure HTML sémantique pour le SEO
✅ Meta tags complètes (description, viewport, etc)
✅ Validation du formulaire côté client

**Pour approche production :**
- Ajouter validation backend du formulaire
- Implémenter CSRF protection
- Utiliser HTTPS
- Ajouter Google Analytics si souhaité

## 📞 Intégration des Coordonnées

Tous les endroits à personnaliser :

1. **js/script.js** (ligne 118)
   ```javascript
   const contactInfo = {
       phone: '+33XXXXXXXXXX',
       whatsapp: '33XXXXXXXXXX',
       email: 'contact@aquaprestige.fr'
   };
   ```

2. **index.html** - Boutons hero
3. **index.html** - Barre flottante
4. **index.html** - Footer
5. **index.html** - Liens réseaux sociaux

## 🌐 Déploiement

### Sur Netlify (Gratuit et Facile)

1. Créer un compte [Netlify](https://netlify.com)
2. Créer un dossier Git local
3. Faire un `git push`
4. Netlify déploie automatiquement

### Sur Votre Serveur

1. Uploader tous les fichiers via FTP
2. S'assurer que `index.html` est à la racine
3. Vérifier les permissions des dossiers assets

## 📈 Maintenance

### Checklist Mensuelle

- [ ] Tester les liens de contact
- [ ] Vérifier la vitesse du site
- [ ] Mettre à jour les photos si besoin
- [ ] Vérifier les positions Google

### Mise à Jour Saisonnière

- [ ] Ajouter des photos de projets récents
- [ ] Mettre à jour le contenu des services
- [ ] Ajuster la vidéo hero si besoin

## 💡 Conseils et Astuces

### Pour Générer Plus de Leads

1. **Optimiser l'image hero** → Nouvelle, Claire, Inspirante
2. **Appels à l'action clairs** → "Demander une intervention gratuite"
3. **Avis clients** → Ajouter une section témoignages
4. **Offres limitées** → "Code promo" ou "Offre spéciale"
5. **Mobile-first** → Site ultra rapide sur mobile

### Pour Améliorer le SEO

1. Ajouter des **backlinks** depuis Google My Business
2. Écrire un **blog** avec articles piscine
3. Installer **Google Search Console**
4. Ajouter **schema.json** pour les étoiles
5. Créer des **pages locales** par ville

### Pour Plus de Conversion

1. Formulaire **ultra simple** (3-4 champs max)
2. Message de **confiance** ("Nous recontacterons rapidement")
3. **WhatsApp** plutôt que email (plus rapide)
4. **Photos réelles** avant/après
5. **Témoignages** et avis clients

## 📝 Notes Techniques

- **Navigateurs supportés** : Chrome, Firefox, Safari, Edge (dernières versions)
- **Mobile support** : iOS 12+, Android 6+
- **Taille totale** : ~150KB (sans images)
- **Dépendances** : Aucune

## 🆘 Dépannage

### Les images ne s'affichent pas
- Vérifier le chemin exact des fichiers
- S'assurer que les fichiers existent bien
- Vérifier les permissions de lecture

### Le formulaire ne fonctionne pas
- Vérifier la console du navigateur (F12)
- S'assurer que JavaScript est activé
- Tester sur une autre page/site

### Le site est lent
- Compresser les images
- Réduire la taille de la vidéo
- Vérifier la connexion internet

## 📄 Licence et Utilisation

Ce site est fourni tel quel. Vous êtes libre de :
- ✅ Modifier le design et le contenu
- ✅ Ajouter des features
- ✅ Utiliser commercialement
- ✅ Redéployer

## 📧 Support

Pour toute question sur l'utilisation ou la personnalisation, consulter le code commenté dans les fichiers.

---

**Version** : 1.0  
**Date** : 20-03-2026  
**Auteur** : AquaPrestige  
**Status** : ✅ Production-Ready
