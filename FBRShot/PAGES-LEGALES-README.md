# Pages Légales et Cookies - FBR Shot

## Pages créées

Les pages légales obligatoires suivantes ont été créées pour votre site :

### 1. **Mentions Légales** (`mentions-legales.html`)
Contient toutes les informations légales obligatoires :
- Informations sur l'entreprise (FBR LABS)
- Coordonnées complètes
- Informations sur l'hébergeur (OVHcloud)
- Propriété intellectuelle
- Responsabilité et mentions légales

### 2. **Politique de Cookies** (`politique-cookies.html`)
Détaille l'utilisation des cookies :
- Types de cookies utilisés
- Cookies nécessaires et analytiques
- Tableau récapitulatif des cookies
- Instructions pour gérer les préférences
- Conformité RGPD

### 3. **Politique de Confidentialité** (`politique-confidentialite.html`)
Protection des données personnelles conforme au RGPD :
- Responsable du traitement
- Données collectées
- Finalités du traitement
- Durée de conservation
- Droits des utilisateurs (accès, rectification, effacement, etc.)
- Informations sur la CNIL

## Système de Gestion des Cookies

### Fichiers créés

1. **`assets/js/cookies.js`** - Gestionnaire de consentement RGPD
2. **`assets/css/cookies.css`** - Styles de la bannière de cookies

### Fonctionnalités

✅ Bannière de consentement conforme RGPD
✅ Options : Accepter tout / Refuser tout / Personnaliser
✅ Gestion des préférences utilisateur
✅ Expiration du consentement après 13 mois
✅ Possibilité de rouvrir la bannière à tout moment
✅ Intégration Google Analytics (désactivable)

## Configuration Google Analytics

### 🔴 ACTION REQUISE : Configurez votre ID Google Analytics

1. **Créer un compte Google Analytics 4 (GA4)**
   - Rendez-vous sur : https://analytics.google.com
   - Créez une propriété GA4 pour votre site
   - Récupérez votre **Measurement ID** (format : `G-XXXXXXXXXX`)

2. **Configurer l'ID dans le code**

   Ouvrez le fichier `assets/js/cookies.js` et modifiez la ligne 13 :

   ```javascript
   // AVANT
   GA_ID: 'G-XXXXXXXXXX',

   // APRÈS (remplacez par votre ID)
   GA_ID: 'G-1234567890',
   ```

3. **Vérifier l'installation**
   - Publiez votre site
   - Acceptez les cookies analytiques sur votre site
   - Vérifiez dans Google Analytics que les données sont bien reçues (peut prendre 24-48h)

## Avantages pour le Référencement (SEO)

### Google Analytics vous permet de :
- 📊 Mesurer le trafic de votre site
- 🎯 Comprendre le comportement des visiteurs
- 📈 Suivre les conversions (demandes de devis)
- 🔍 Analyser les sources de trafic (Google, réseaux sociaux, etc.)
- 📱 Connaître les appareils utilisés (mobile, desktop)
- 🌍 Identifier la géographie de vos visiteurs

### Optimisations SEO supplémentaires incluses :
- ✅ Balises meta robots appropriées (noindex sur pages légales)
- ✅ Liens internes vers les pages légales
- ✅ Structure HTML sémantique
- ✅ Conformité légale (bon pour le SEO)

## Structure des Cookies

### Cookies Nécessaires (toujours actifs)
| Nom | Finalité | Durée |
|-----|----------|-------|
| `fbr_cookie_consent` | Mémorisation des préférences cookies | 13 mois |
| `fbr_session` | Gestion de session | Session |

### Cookies Analytiques (avec consentement)
| Nom | Fournisseur | Finalité | Durée |
|-----|-------------|----------|-------|
| `_ga` | Google Analytics | Distinguer les utilisateurs | 2 ans |
| `_ga_*` | Google Analytics | État de session | 2 ans |
| `_gid` | Google Analytics | Distinguer les utilisateurs | 24h |

## Intégration dans le site

### Fichiers modifiés :
1. **`index.html`**
   - Ajout du CSS cookies
   - Ajout du JS cookies
   - Mise à jour des liens footer vers les pages légales
   - Mise à jour du lien RGPD dans le formulaire

### Fichiers créés :
- `mentions-legales.html`
- `politique-cookies.html`
- `politique-confidentialite.html`
- `assets/js/cookies.js`
- `assets/css/cookies.css`

## Test de la bannière de cookies

1. Ouvrez votre site en navigation privée
2. La bannière devrait apparaître en bas de page
3. Testez les 3 options :
   - **Tout accepter** : Active Google Analytics
   - **Tout refuser** : Désactive les cookies analytiques
   - **Personnaliser** : Choix granulaire

4. Pour rouvrir la bannière :
   - Sur la page `politique-cookies.html`, cliquez sur "Gérer mes préférences cookies"
   - Ou supprimez les cookies dans votre navigateur

## Conformité RGPD

### ✅ Points conformes :
- Consentement explicite pour les cookies non nécessaires
- Information claire sur l'utilisation des données
- Droit d'accès, de rectification et d'effacement
- Durée de conservation définie
- Possibilité de retirer son consentement
- Informations sur le responsable de traitement
- Coordonnées du DPO (si applicable)
- Information sur le droit de réclamation CNIL

## Support et Contact

Pour toute question sur les pages légales ou le système de cookies :

📧 **Email** : contact@fbrshot.fr
📱 **Téléphone** : +33 7 78 64 13 76
🏢 **Adresse** : 61 rue de Lyon, 75012 Paris

## Maintenance

### Mises à jour recommandées :
- [ ] Configurer l'ID Google Analytics (priorité haute)
- [ ] Vérifier les données de l'entreprise dans les mentions légales
- [ ] Tester la bannière de cookies sur différents navigateurs
- [ ] Vérifier les liens dans le footer
- [ ] Mettre à jour la date de dernière modification si nécessaire

### Vérifications périodiques :
- Renouvellement du consentement après 13 mois (automatique)
- Mise à jour des politiques si changement de pratiques
- Vérification de la conformité RGPD

---

**Date de création** : Février 2026
**Version** : 1.0
**Statut** : ✅ Prêt pour production (après configuration GA)
