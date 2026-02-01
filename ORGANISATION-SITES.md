# 📁 Organisation des Sites - FBR

## Structure complète

```
/Users/pierre-richardpascal/boss/sitevitrine/
├── FBRShot/                    # Site Location Photobooth
│   ├── Thème: Orange #FF6B35
│   ├── Cible: Événementiel (mariages, soirées...)
│   └── Services: Photobooth + Photographe
│
└── FBRLabs/                    # Site Agence Web
    ├── Thème: Bleu #667eea
    ├── Cible: Entreprises, Startups
    └── Services: Dev Web + Apps + SEO + Marketing
```

---

## 🎯 FBR Shot - Photobooth & Photo

### 📍 Emplacement
`/Users/pierre-richardpascal/boss/sitevitrine/FBRShot/`

### 🎨 Identité visuelle
- **Couleur principale** : Orange `#FF6B35`
- **Style** : Dynamique, festif, événementiel
- **Logo** : FBR Shot avec logo photobooth

### 💼 Services
1. Location de photobooth HD
2. Service photographe professionnel
3. Galerie digitale
4. Impression instantanée

### 🎯 Cible
- Mariages
- Anniversaires
- Événements d'entreprise
- Festivals
- Particuliers et entreprises

### 📧 Contact
- Email : `contact@fbrshot.fr`
- Téléphone : +33 7 78 64 13 76
- Site : www.fbrshot.fr

---

## 💻 FBR Labs - Agence Web & Digital

### 📍 Emplacement
`/Users/pierre-richardpascal/boss/sitevitrine/FBRLabs/`

### 🎨 Identité visuelle
- **Couleur principale** : Bleu `#667eea`
- **Couleur secondaire** : Violet `#764ba2`
- **Style** : Professionnel, tech, moderne
- **Logo** : Texte "FBR Labs" en bleu

### 💼 Services
1. Développement Web (WordPress, Shopify, Custom)
2. Applications Mobiles (iOS, Android)
3. Optimisation SEO
4. Analyse de Marché
5. Email Marketing
6. Marketing Digital

### 🎯 Cible
- Entreprises
- Startups
- E-commerces
- PME/TPE

### 📧 Contact
- Email : `contact@fbrlabs.fr`
- Téléphone : +33 7 78 64 13 76
- Site : www.fbrlabs.fr

---

## 🎨 Différenciation Visuelle

### Couleurs

| Élément | FBR Shot | FBR Labs |
|---------|----------|----------|
| **Couleur principale** | 🟠 Orange `#FF6B35` | 🔵 Bleu `#667eea` |
| **Couleur foncée** | 🟠 `#e55a2a` | 🔵 `#5568d3` |
| **Couleur claire** | 🟠 `#ff7d4f` | 🔵 `#7c8ff0` |
| **Accent** | 🟠 Orange | 🟣 Violet `#764ba2` |
| **Style** | Dynamique, festif | Professionnel, tech |

### Fichiers de thème

| Site | Fichier CSS | Description |
|------|-------------|-------------|
| **FBR Shot** | `main.css` (orange par défaut) | Couleurs orange natives |
| **FBR Labs** | `theme-fbrlabs.css` | Surcharge en bleu |

---

## 📄 Pages incluses sur chaque site

### Pages communes (identiques en structure)

| Page | Description | Status |
|------|-------------|--------|
| `index.html` | Page d'accueil | ✅ |
| `mentions-legales.html` | Mentions légales RGPD | ✅ |
| `politique-cookies.html` | Politique de cookies | ✅ |
| `politique-confidentialite.html` | RGPD | ✅ |
| `merci.html` | Remerciement formulaire | ✅ |
| `sitemap.xml` | SEO | ✅ |
| `robots.txt` | SEO | ✅ |

### Sections spécifiques FBR Shot

1. Services (Photobooth)
2. Photographe
3. Avantages
4. Tarifs (Classic, Premium, Corporate)
5. Témoignages
6. FAQ
7. Contact

### Sections spécifiques FBR Labs

1. Services (6 services digital)
2. Processus (4 étapes)
3. Technologies (Stack tech)
4. Portfolio (5 projets)
5. Tarifs (Site vitrine, E-commerce, App)
6. Contact

---

## ⚙️ Fonctionnalités communes

Les deux sites partagent :

### ✅ Conformité RGPD
- Mentions légales complètes
- Politique de cookies
- Politique de confidentialité
- Bannière de consentement
- Droits utilisateurs

### ✅ Formulaire de contact
- FormSubmit (gratuit, sans backend)
- Protection anti-spam (honeypot)
- Page de remerciement
- Tracking Google Analytics

### ✅ SEO optimisé
- Meta tags (title, description, OG)
- Schema.org (Structured Data)
- Sitemap.xml
- Robots.txt
- URLs canoniques

### ✅ Design responsive
- Mobile-first
- Tablette optimisée
- Desktop full-featured

### ✅ Performance
- CSS/JS optimisés
- Images lazy loading
- Variables CSS modernes

---

## 🔧 Configuration

### FBR Shot

1. **Email** : `contact@fbrshot.fr`
2. **Thème** : Orange (natif dans main.css)
3. **Google Analytics** : À configurer dans `cookies.js` ligne 13
4. **FormSubmit** : Activer en envoyant 1er formulaire

### FBR Labs

1. **Email** : `contact@fbrlabs.fr`
2. **Thème** : Bleu (chargé via `theme-fbrlabs.css`)
3. **Google Analytics** : À configurer dans `cookies.js` ligne 13
4. **FormSubmit** : Activer en envoyant 1er formulaire

---

## 📚 Documentation

### FBR Shot

| Fichier | Description |
|---------|-------------|
| `README.md` | Documentation complète |
| `FORMSUBMIT-ACTIVATION.md` | Guide activation email |
| `BACKEND-EMAIL-GUIDE.md` | Alternatives backend |
| `SEO-SNIPPETS.md` | Code SEO additionnel |
| `SECTION-PHOTOGRAPHE-README.md` | Doc service photographe |
| `PAGES-LEGALES-README.md` | Doc pages légales |

### FBR Labs

| Fichier | Description |
|---------|-------------|
| `README.md` | Documentation complète |
| `FORMSUBMIT-ACTIVATION.md` | Guide activation email |
| `INSTALLATION-COMPLETE.md` | Checklist complète |
| `THEME-BLEU.md` | Documentation thème bleu |

---

## 🚀 Déploiement

### FBR Shot → www.fbrshot.fr

1. Upload tous les fichiers de `/FBRShot/`
2. Configurer le nom de domaine
3. Activer HTTPS
4. Activer FormSubmit (1er envoi)
5. Configurer Google Analytics

### FBR Labs → www.fbrlabs.fr

1. Upload tous les fichiers de `/FBRLabs/`
2. Configurer le nom de domaine
3. Activer HTTPS
4. Activer FormSubmit (1er envoi)
5. Configurer Google Analytics

---

## 🎯 Utilisation

### Quel site pour quel besoin ?

| Besoin client | Site à utiliser | Pourquoi |
|---------------|-----------------|----------|
| Louer un photobooth | **FBR Shot** | Service événementiel |
| Photographe pour mariage | **FBR Shot** | Service photo |
| Créer un site web | **FBR Labs** | Développement web |
| Développer une app | **FBR Labs** | Dev mobile |
| Améliorer son SEO | **FBR Labs** | Marketing digital |
| E-commerce Shopify | **FBR Labs** | Dev e-commerce |

### Complémentarité

Les deux sites peuvent se référencer mutuellement :
- FBR Shot peut mentionner FBR Labs pour les besoins web
- FBR Labs peut proposer FBR Shot comme service événementiel

---

## 🆔 Informations entreprise

**FBR LABS** (même entreprise pour les deux sites)

- **Raison sociale** : FBR LABS
- **Forme juridique** : SAS
- **SIREN** : 944 181 452
- **SIRET** : 944 181 452 00011
- **TVA** : FR52944181452
- **Capital** : 100,00 €
- **Adresse** : 61 rue de Lyon, 75012 Paris
- **Téléphone** : +33 7 78 64 13 76

---

## ✅ Checklist de mise en production

### Avant le lancement (pour chaque site)

- [ ] Tester toutes les pages
- [ ] Ajouter les images
- [ ] Activer FormSubmit
- [ ] Tester le formulaire
- [ ] Vérifier les liens
- [ ] Tester sur mobile
- [ ] Configurer Google Analytics
- [ ] Personnaliser le contenu

### Après le lancement (pour chaque site)

- [ ] Vérifier les emails
- [ ] Soumettre à Google Search Console
- [ ] Activer HTTPS
- [ ] Tester la vitesse (PageSpeed)
- [ ] Vérifier le SEO
- [ ] Créer Google My Business
- [ ] Partager sur réseaux sociaux

---

## 🎉 Résumé

Vous disposez maintenant de **2 sites web professionnels complets** :

| Critère | FBR Shot | FBR Labs |
|---------|----------|----------|
| **Thème** | 🟠 Orange | 🔵 Bleu |
| **Activité** | Photobooth & Photo | Web & Digital |
| **Cible** | Événementiel | Entreprises |
| **Pages** | 5 + docs | 5 + docs |
| **Conformité RGPD** | ✅ | ✅ |
| **SEO** | ✅ | ✅ |
| **Formulaire** | ✅ | ✅ |
| **Responsive** | ✅ | ✅ |
| **Status** | ✅ Prêt | ✅ Prêt |

**Les deux sites sont prêts pour la production !** 🚀

---

**Créé le** : Février 2026
**Version** : 1.0
