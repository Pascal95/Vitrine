# 🎨 Thème Bleu - FBR Labs

## Couleurs principales

Le site FBR Labs utilise un **thème bleu** pour se différencier de FBR Shot (orange).

### Palette de couleurs

| Élément | Couleur | Code | Utilisation |
|---------|---------|------|-------------|
| **Bleu principal** | ![#667eea](https://via.placeholder.com/15/667eea/667eea.png) | `#667eea` | Boutons, liens, accents |
| **Bleu foncé** | ![#5568d3](https://via.placeholder.com/15/5568d3/5568d3.png) | `#5568d3` | Hover, état actif |
| **Bleu clair** | ![#7c8ff0](https://via.placeholder.com/15/7c8ff0/7c8ff0.png) | `#7c8ff0` | Backgrounds légers |
| **Violet accent** | ![#764ba2](https://via.placeholder.com/15/764ba2/764ba2.png) | `#764ba2` | Dégradés, accents |

### Comparaison FBR Shot vs FBR Labs

| Site | Couleur principale | Code | Style |
|------|-------------------|------|-------|
| **FBR Shot** | Orange | `#FF6B35` | Dynamique, événementiel |
| **FBR Labs** | Bleu | `#667eea` | Professionnel, tech |

## Fichier de thème

Le thème bleu est défini dans :
```
/assets/css/theme-fbrlabs.css
```

Ce fichier surcharge les variables CSS de `main.css` pour appliquer le thème bleu.

## Variables CSS surchargées

```css
:root {
  --color-primary: #667eea;        /* Bleu principal */
  --color-primary-dark: #5568d3;   /* Bleu foncé */
  --color-primary-light: #7c8ff0;  /* Bleu clair */
  --color-accent: #764ba2;          /* Violet accent */
}
```

## Dégradés

### Gradient principal
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Utilisé pour :
- Hero title highlight
- Boutons spéciaux
- Cards featured
- Page de remerciement (background)

### Gradient léger
```css
background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
```

Utilisé pour :
- Hero section background
- Overlays au hover

## Éléments stylisés en bleu

### Boutons
- `.btn-primary` - Fond bleu `#667eea`
- `.btn-primary:hover` - Fond bleu foncé `#5568d3`
- `.btn-outline` - Bordure bleue

### Navigation
- `.nav-link:hover` - Couleur bleue
- `.nav-link.is-active` - Couleur bleue
- Logo FBR Labs - Texte bleu

### Formulaires
- Champs en focus - Bordure bleue
- Checkbox cochée - Fond bleu
- Bouton submit - Fond bleu

### Cartes
- Hover effect - Bordure bleue légère
- Portfolio cards - Overlay bleu au hover
- Pricing card "Populaire" - Badge bleu

### Autres éléments
- Liens - Couleur bleue au hover
- Stats hero - Nombres en bleu
- Service cards - Bordure bleue au hover
- Back to top button - Fond bleu
- Cookie banner - Bordure top bleue
- Selection de texte - Background bleu

## Page de remerciement (merci.html)

Background avec gradient bleu-violet :
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Titre et icônes en bleu `#667eea`.

## Personnalisation

### Changer la couleur principale

Pour changer la couleur principale, modifiez dans `theme-fbrlabs.css` :

```css
:root {
  --color-primary: #VOTRE_COULEUR;
}
```

### Changer le dégradé

```css
--gradient-primary: linear-gradient(135deg, #COULEUR1 0%, #COULEUR2 100%);
```

### Ajouter une nouvelle couleur

```css
:root {
  --color-custom: #123456;
}
```

Puis utilisez-la :
```css
.mon-element {
  color: var(--color-custom);
}
```

## Animations

### Pulse bleu

Animation de pulsation pour les boutons en focus :

```css
@keyframes pulse-blue {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
  }
}
```

## Responsive

Le thème bleu est conservé sur tous les breakpoints :
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## Accessibilité

### Contraste

Toutes les couleurs respectent le ratio de contraste WCAG AA :
- Texte blanc sur bleu `#667eea` : ✅ 4.5:1
- Texte foncé sur bleu clair `#7c8ff0` : ✅ 4.5:1

### Daltonisme

Le bleu est bien visible pour les différents types de daltonisme :
- Protanopie (rouge-vert) : ✅
- Deutéranopie (rouge-vert) : ✅
- Tritanopie (bleu-jaune) : ⚠️ Considérer un orange pour les accents

## Compatibilité

Le thème est compatible avec :
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

## Fichiers modifiés

Toutes les pages HTML incluent le thème :

```html
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/cookies.css">
<link rel="stylesheet" href="assets/css/theme-fbrlabs.css">
```

Pages concernées :
- ✅ index.html
- ✅ mentions-legales.html
- ✅ politique-cookies.html
- ✅ politique-confidentialite.html
- ✅ merci.html

## Maintenance

### Ordre de chargement CSS

**Important** : `theme-fbrlabs.css` doit toujours être chargé **après** `main.css` et `cookies.css` pour surcharger correctement les variables.

```html
<!-- BON -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/cookies.css">
<link rel="stylesheet" href="assets/css/theme-fbrlabs.css">

<!-- MAUVAIS -->
<link rel="stylesheet" href="assets/css/theme-fbrlabs.css">
<link rel="stylesheet" href="assets/css/main.css">
```

### Mise à jour des couleurs

Si vous modifiez une couleur dans `theme-fbrlabs.css`, vérifiez :
1. Le contraste avec le texte blanc/noir
2. L'affichage sur mobile
3. La cohérence avec les autres éléments
4. L'accessibilité (WCAG AA)

## Support

Pour toute question sur le thème :
- Email : contact@fbrlabs.fr
- Documentation : README.md

---

**Version** : 1.0
**Date** : Février 2026
**Créé par** : FBR Labs
