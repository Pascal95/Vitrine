# 📧 Activation FormSubmit - Guide Complet

## ✅ Ce qui a été fait

Le formulaire de contact de votre site a été configuré pour utiliser **FormSubmit**, un service gratuit d'envoi d'emails sans backend.

### Modifications apportées

1. ✅ **Formulaire modifié** dans `index.html`
   - Action : `https://formsubmit.co/contact@fbrshot.fr`
   - Méthode : POST
   - Champs cachés de configuration ajoutés
   - Honeypot anti-spam ajouté

2. ✅ **Page de remerciement créée** : `merci.html`
   - Design professionnel avec animation
   - Liste des prochaines étapes
   - Redirection automatique après 10 secondes
   - Tracking Google Analytics intégré

3. ✅ **Protection anti-spam**
   - Honeypot invisible
   - Validation HTML5

---

## 🚀 Activation (IMPORTANT - À FAIRE UNE SEULE FOIS)

### Étape 1 : Premier envoi de test

La **première fois** qu'un formulaire est envoyé à FormSubmit, le service vous envoie un **email de confirmation** pour vérifier que c'est bien vous.

1. **Ouvrez votre site** : `index.html`
2. **Allez à la section Contact** (tout en bas)
3. **Remplissez le formulaire** avec vos vraies informations
4. **Cliquez sur "Envoyer la demande"**

### Étape 2 : Confirmer votre email

1. **Vérifiez votre boîte mail** : `contact@fbrshot.fr`
2. **Cherchez un email de FormSubmit** (vérifiez aussi les spams/indésirables)
3. **Sujet de l'email** : "FormSubmit Email Address Confirmation"
4. **Cliquez sur le lien de confirmation** dans l'email

### Étape 3 : C'est activé !

Une fois confirmé, tous les prochains formulaires seront **automatiquement envoyés** à `contact@fbrshot.fr` sans autre action de votre part.

---

## 📨 Format de l'email que vous recevrez

Après activation, chaque demande de devis arrivera dans votre boîte mail avec ce format :

```
De : contact@fbrshot.fr
Sujet : Nouvelle demande de devis - FBR Shot

┌─────────────────────────────────────────┐
│ Nouvelle demande de devis - FBR Shot    │
└─────────────────────────────────────────┘

name: Jean Dupont
email: jean.dupont@example.com
phone: 06 12 34 56 78
eventType: Mariage
eventDate: 2026-06-15
message: Bonjour, je souhaite louer un photobooth
         pour mon mariage le 15 juin 2026...
rgpd: accepté

Envoyé depuis : FBR Shot
```

---

## ⚙️ Configuration actuelle

Voici les paramètres configurés dans votre formulaire :

| Paramètre | Valeur | Description |
|-----------|--------|-------------|
| **Email destinataire** | `contact@fbrshot.fr` | Adresse qui reçoit les demandes |
| **Sujet** | "Nouvelle demande de devis - FBR Shot" | Titre de l'email |
| **Page de redirection** | `merci.html` | Page affichée après envoi |
| **Format email** | `box` | Template élégant avec encadré |
| **CAPTCHA** | `false` | Désactivé (honeypot suffit) |
| **Anti-spam** | Honeypot | Champ invisible contre les bots |

---

## 🔧 Personnalisation avancée (optionnel)

### Ajouter une copie à une autre adresse

Si vous voulez recevoir les emails sur une autre adresse en plus, ajoutez ce champ caché dans le formulaire :

```html
<input type="hidden" name="_cc" value="admin@fbrshot.fr,autre@example.com">
```

### Activer reCAPTCHA (si spam)

Si vous recevez trop de spam, activez reCAPTCHA en changeant :

```html
<!-- AVANT -->
<input type="hidden" name="_captcha" value="false">

<!-- APRÈS -->
<input type="hidden" name="_captcha" value="true">
```

### Changer la page de redirection

Pour rediriger vers une autre page après l'envoi :

```html
<input type="hidden" name="_next" value="https://www.fbrshot.fr/autre-page.html">
```

### Personnaliser le sujet de l'email

```html
<input type="hidden" name="_subject" value="🎉 Nouveau client potentiel !">
```

### Bloquer l'affichage de l'IP du visiteur

Par défaut, FormSubmit inclut l'IP du visiteur. Pour la masquer :

```html
<input type="hidden" name="_blacklist" value="_ip">
```

### Changer le format de l'email

3 formats disponibles :
- `box` : Encadré élégant (actuel)
- `table` : Tableau structuré
- `plain` : Texte simple

```html
<input type="hidden" name="_template" value="table">
```

---

## 🧪 Test du formulaire

### Checklist de test

1. [ ] **Remplir tous les champs obligatoires**
   - Nom complet ✓
   - Email ✓
   - Type d'événement ✓
   - Message ✓
   - Accepter la politique de confidentialité ✓

2. [ ] **Envoyer le formulaire**
   - Cliquer sur "Envoyer la demande"
   - Vérifier la redirection vers `merci.html`

3. [ ] **Vérifier l'email**
   - Vérifier la boîte mail `contact@fbrshot.fr`
   - Email reçu dans les 30 secondes
   - Toutes les informations sont présentes

4. [ ] **Tester sur mobile**
   - Formulaire responsive
   - Page merci responsive
   - Email lisible sur mobile

---

## ❓ FAQ

### Q : Combien de temps pour recevoir l'email ?
**R :** Généralement **30 secondes** maximum. Si vous ne recevez rien :
- Vérifiez les **spams/indésirables**
- Vérifiez que l'email de confirmation a bien été validé
- Vérifiez que l'adresse `contact@fbrshot.fr` existe et fonctionne

### Q : Y a-t-il une limite d'envois ?
**R :** Non, FormSubmit est **gratuit et illimité**. Pas de restriction sur le nombre de formulaires.

### Q : Que se passe-t-il si je change d'adresse email ?
**R :** Il faut :
1. Modifier l'adresse dans `index.html` (ligne ~660)
2. Envoyer un nouveau formulaire de test
3. Confirmer la nouvelle adresse email

### Q : Les données sont-elles stockées quelque part ?
**R :** FormSubmit ne stocke **aucune donnée**. Les informations sont simplement transférées par email. Aucune base de données n'est créée.

### Q : Est-ce sécurisé ?
**R :** Oui, FormSubmit utilise :
- **HTTPS** pour le transfert
- **Honeypot** anti-spam
- Pas de stockage des données
- Conforme RGPD

### Q : Puis-je sauvegarder les demandes dans une base de données ?
**R :** Avec FormSubmit seul, non. Si vous avez besoin de :
- Sauvegarder les demandes
- Créer un CRM
- Faire des statistiques

Alors il faudra passer à la **Solution 3 (Backend PHP)** du guide BACKEND-EMAIL-GUIDE.md

### Q : Comment désactiver la redirection automatique sur merci.html ?
**R :** Dans `merci.html`, supprimez ou commentez le script de countdown (lignes 116-135).

### Q : Puis-je personnaliser la page merci.html ?
**R :** Oui, totalement ! Modifiez :
- Les textes
- Les couleurs (variables CSS)
- Le délai de redirection (10 secondes par défaut)
- Ajouter votre logo

---

## 🎨 Personnaliser la page merci.html

### Changer le délai de redirection

Dans `merci.html`, ligne 118 :
```javascript
let seconds = 10; // Changez ici (en secondes)
```

### Désactiver la redirection automatique

Commentez ou supprimez les lignes 116-135 dans `merci.html`.

### Changer les couleurs

La page utilise les variables CSS de votre site. Pour personnaliser, ajoutez dans la section `<style>` :

```css
.thank-you-section {
  background: linear-gradient(135deg, #votre-couleur1 0%, #votre-couleur2 100%);
}

.thank-you-title {
  color: #votre-couleur;
}
```

---

## 🔒 Sécurité et RGPD

### Protection anti-spam

Le formulaire inclut un **honeypot** (champ invisible) :
```html
<input type="text" name="_honey" style="display:none">
```

⚠️ **Ne supprimez pas ce champ !** Il protège contre les bots spam.

### Conformité RGPD

- ✅ Consentement explicite (checkbox obligatoire)
- ✅ Lien vers la politique de confidentialité
- ✅ Pas de stockage des données par FormSubmit
- ✅ Données transférées uniquement par email

---

## 📊 Tracking et Analytics

### Google Analytics

Si vous avez configuré Google Analytics (voir PAGES-LEGALES-README.md), chaque envoi de formulaire est automatiquement tracké comme une conversion.

### Événements trackés

- Page vue de `merci.html`
- Événement "conversion" avec label "Contact Form Submission"

---

## 🆘 Problèmes courants

### Le formulaire ne s'envoie pas

1. **Vérifiez la console JavaScript** (F12 dans Chrome)
2. **Vérifiez que tous les champs requis sont remplis**
3. **Vérifiez la checkbox RGPD**

### Je ne reçois pas d'email

1. **Avez-vous confirmé l'email** lors du premier envoi ?
2. **Vérifiez les spams** dans `contact@fbrshot.fr`
3. **Vérifiez l'adresse email** dans le formulaire (ligne ~660 de index.html)

### La page merci.html ne s'affiche pas

1. **Vérifiez que le fichier existe** : `merci.html` à la racine
2. **Vérifiez l'URL** dans le champ `_next` du formulaire
3. **Mettez l'URL complète** : `https://www.fbrshot.fr/merci.html`

### L'email contient "undefined"

Vérifiez que tous les champs du formulaire ont bien un attribut `name=""` :
```html
<input type="text" id="name" name="name" ...>
                              ^^^^^^^^^^^
```

---

## 📞 Support FormSubmit

- **Documentation** : https://formsubmit.co/documentation
- **FAQ** : https://formsubmit.co/faq
- **Contact** : team@formsubmit.co

---

## ✅ Checklist finale

Avant la mise en production :

- [ ] Envoyer un formulaire de test
- [ ] Confirmer l'email FormSubmit
- [ ] Vérifier la réception de l'email
- [ ] Tester la page merci.html
- [ ] Tester sur mobile
- [ ] Vérifier les spams
- [ ] Vérifier le tracking Google Analytics (si configuré)
- [ ] Tester avec un vrai prospect

---

**Félicitations !** 🎉 Votre système d'envoi d'emails est maintenant opérationnel et prêt à recevoir vos premières demandes de devis !
