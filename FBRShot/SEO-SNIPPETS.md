# Snippets SEO Additionnels - FBR Shot

## Google Tag Manager (Alternative recommandée)

Google Tag Manager (GTM) est plus flexible que Google Analytics seul et permet d'ajouter facilement d'autres outils de tracking.

### Pourquoi utiliser GTM ?
- ✅ Gestion centralisée de tous vos tags (GA, Facebook Pixel, etc.)
- ✅ Pas besoin de modifier le code pour ajouter de nouveaux tags
- ✅ Meilleur contrôle et débogage
- ✅ Conforme RGPD avec gestion du consentement

### Installation GTM (optionnel)

1. **Créer un compte GTM**
   - https://tagmanager.google.com
   - Créez un conteneur pour votre site
   - Récupérez votre ID GTM (format : `GTM-XXXXXXX`)

2. **Ajouter dans `<head>` de index.html** (juste après `<head>`)
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

3. **Ajouter dans `<body>` de index.html** (juste après `<body>`)
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Meta Tags SEO Additionnels

### Pour améliorer le référencement local

Ajoutez dans `<head>` de index.html :

```html
<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FBR Shot",
  "image": "https://www.fbrshot.fr/assets/images/gallery/logofbr.png",
  "@id": "https://www.fbrshot.fr",
  "url": "https://www.fbrshot.fr",
  "telephone": "+33778641376",
  "email": "contact@fbrshot.fr",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "61 rue de Lyon",
    "addressLocality": "Paris",
    "postalCode": "75012",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/fbrshot",
    "https://www.instagram.com/fbrshot",
    "https://www.linkedin.com/company/fbrshot"
  ]
}
</script>
```

### Service Schema

```html
<!-- Service Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Location de Photobooth",
  "provider": {
    "@type": "Organization",
    "name": "FBR Shot",
    "telephone": "+33778641376",
    "email": "contact@fbrshot.fr"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de location de photobooth",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formule Classic",
          "description": "Location photobooth 6 heures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formule Premium",
          "description": "Location photobooth 12 heures"
        }
      }
    ]
  }
}
</script>
```

## Pixels de Conversion

### Facebook Pixel (pour publicités Facebook/Instagram)

1. **Obtenir votre Pixel ID** sur Facebook Business Manager

2. **Ajouter dans `<head>`** :
```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

3. **Tracker les conversions** (formulaire de contact) :
```javascript
// Dans votre code de formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // ... votre code existant

  // Track conversion
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: 'Contact Form',
      content_category: 'Lead Generation'
    });
  }
});
```

### TikTok Pixel

1. **Obtenir votre Pixel ID** sur TikTok Ads Manager

2. **Ajouter dans `<head>`** :
```html
<!-- TikTok Pixel Code -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('YOUR_PIXEL_ID');
  ttq.page();
}(window, document, 'ttq');
</script>
<!-- End TikTok Pixel Code -->
```

## Google Search Console

### Vérification du site

1. **S'inscrire sur** : https://search.google.com/search-console

2. **Ajouter une balise de vérification** dans `<head>` :
```html
<meta name="google-site-verification" content="VOTRE_CODE_DE_VERIFICATION" />
```

3. **Soumettre le sitemap** :
   - Créez un fichier `sitemap.xml` à la racine
   - Soumettez l'URL : `https://www.fbrshot.fr/sitemap.xml`

### Exemple de sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.fbrshot.fr/</loc>
    <lastmod>2026-02-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.fbrshot.fr/mentions-legales.html</loc>
    <lastmod>2026-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.fbrshot.fr/politique-cookies.html</loc>
    <lastmod>2026-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.fbrshot.fr/politique-confidentialite.html</loc>
    <lastmod>2026-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

## Fichier robots.txt

Créez un fichier `robots.txt` à la racine :

```txt
# www.fbrshot.fr/robots.txt

User-agent: *
Allow: /

# Pages légales - crawl autorisé mais pas prioritaire
Allow: /mentions-legales.html
Allow: /politique-cookies.html
Allow: /politique-confidentialite.html

# Assets
Allow: /assets/

# Sitemap
Sitemap: https://www.fbrshot.fr/sitemap.xml

# Désactiver le crawl sur les fichiers sensibles
Disallow: /admin/
Disallow: /*.json$
Disallow: /*.md$
```

## Performance et SEO

### Optimisation des images

Utilisez des formats modernes et compressés :
- WebP pour les photos
- SVG pour les logos et icônes
- Lazy loading : `loading="lazy"`

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Preload des ressources critiques

Déjà inclus dans votre `<head>` :
```html
<link rel="preload" href="assets/css/main.css" as="style">
<link rel="preload" href="assets/images/gallery/logofbr.png" as="image">
```

### Preconnect pour ressources externes

```html
<link rel="preconnect" href="https://www.google-analytics.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

## Tracking des événements

### Événements Google Analytics à tracker

Dans votre fichier JavaScript principal, ajoutez :

```javascript
// Track clicks on CTA buttons
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
    if (window.gtag) {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': this.textContent,
        'value': 1
      });
    }
  });
});

// Track form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  if (window.gtag) {
    gtag('event', 'form_submission', {
      'event_category': 'conversion',
      'event_label': 'Contact Form',
      'value': 1
    });
  }
});

// Track outbound links
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.addEventListener('click', function() {
      if (window.gtag) {
        gtag('event', 'outbound_link', {
          'event_category': 'engagement',
          'event_label': this.href,
          'value': 1
        });
      }
    });
  }
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', function() {
    if (window.gtag) {
      gtag('event', 'phone_click', {
        'event_category': 'conversion',
        'event_label': 'Phone Call',
        'value': 1
      });
    }
  });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function() {
    if (window.gtag) {
      gtag('event', 'email_click', {
        'event_category': 'conversion',
        'event_label': 'Email',
        'value': 1
      });
    }
  });
});
```

## Checklist SEO Finale

### Avant la mise en production :

- [ ] Configurer Google Analytics ID dans `cookies.js`
- [ ] Ajouter le sitemap.xml
- [ ] Ajouter le robots.txt
- [ ] Vérifier tous les liens (pas de liens cassés)
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier la vitesse du site (PageSpeed Insights)
- [ ] Configurer Google Search Console
- [ ] Tester la bannière de cookies
- [ ] Vérifier les balises meta (title, description)
- [ ] Ajouter les coordonnées GPS dans le schema LocalBusiness
- [ ] Mettre à jour les liens réseaux sociaux dans le footer
- [ ] Compresser toutes les images
- [ ] Activer le HTTPS (certificat SSL)
- [ ] Configurer le cache navigateur
- [ ] Minifier CSS et JS pour la production

### Outils de test :

- **PageSpeed Insights** : https://pagespeed.web.dev/
- **Mobile-Friendly Test** : https://search.google.com/test/mobile-friendly
- **Rich Results Test** : https://search.google.com/test/rich-results
- **SSL Checker** : https://www.ssllabs.com/ssltest/

---

**Dernière mise à jour** : Février 2026
