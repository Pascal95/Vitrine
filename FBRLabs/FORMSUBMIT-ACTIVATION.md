# 📧 Activation FormSubmit - FBR Labs

## ✅ Configuration actuelle

Le formulaire de contact est déjà configuré pour utiliser FormSubmit avec :
- **Email destinataire** : `contact@fbrlabs.fr`
- **Sujet** : "Nouvelle demande de projet - FBR Labs"
- **Page de redirection** : `merci.html`

## 🚀 Activation (À FAIRE UNE SEULE FOIS)

### Étape 1 : Premier envoi de test

1. Ouvrez `index.html` dans votre navigateur
2. Scrollez jusqu'à la section "Contact"
3. Remplissez le formulaire avec de vraies informations :
   - Nom complet
   - Email
   - Type de projet
   - Description du projet
   - Cochez la case RGPD

4. Cliquez sur "Envoyer la demande"

### Étape 2 : Confirmer votre email

1. Ouvrez votre boîte mail `contact@fbrlabs.fr`
2. Cherchez un email de **FormSubmit**
   - Sujet : "FormSubmit Email Address Confirmation"
   - Vérifiez aussi les **spams/indésirables**
3. Cliquez sur le **lien de confirmation** dans l'email

### Étape 3 : C'est activé !

✅ Tous les prochains formulaires seront automatiquement envoyés à `contact@fbrlabs.fr` !

## 📨 Format de l'email reçu

```
De : contact@fbrlabs.fr
Sujet : Nouvelle demande de projet - FBR Labs

┌──────────────────────────────────────┐
│ Nouvelle demande de projet           │
└──────────────────────────────────────┘

name: Jean Dupont
email: jean.dupont@example.com
phone: 06 12 34 56 78
projectType: Site vitrine
budget: 1000€ - 3000€
message: Je souhaite créer un site vitrine pour
         mon entreprise de consulting...
rgpd: accepté

Envoyé depuis : FBR Labs
```

## ⚙️ Paramètres configurés

| Paramètre | Valeur | Description |
|-----------|--------|-------------|
| Email | `contact@fbrlabs.fr` | Destinataire des demandes |
| Sujet | "Nouvelle demande de projet - FBR Labs" | Titre de l'email |
| Redirection | `merci.html` | Page après envoi |
| Template | `box` | Format élégant |
| CAPTCHA | `false` | Honeypot suffit |
| Anti-spam | Honeypot | Champ invisible |

## 🎨 Page de remerciement (merci.html)

Après l'envoi, le visiteur est redirigé vers `merci.html` avec :
- ✅ Message de confirmation animé
- ✅ Liste des prochaines étapes
- ✅ Redirection automatique après 10 secondes
- ✅ Tracking Google Analytics

## 🔧 Personnalisation (optionnel)

### Ajouter une copie à une autre adresse

Dans `index.html`, ajoutez ce champ caché dans le formulaire :

```html
<input type="hidden" name="_cc" value="admin@fbrlabs.fr,autre@example.com">
```

### Activer reCAPTCHA (si spam)

```html
<!-- Changez de false à true -->
<input type="hidden" name="_captcha" value="true">
```

### Modifier le sujet de l'email

```html
<input type="hidden" name="_subject" value="🚀 Nouveau projet web !">
```

### Changer la page de redirection

```html
<input type="hidden" name="_next" value="https://www.fbrlabs.fr/autre-page.html">
```

## 🧪 Test du formulaire

### Checklist

- [ ] Remplir tous les champs obligatoires
- [ ] Type de projet sélectionné
- [ ] Case RGPD cochée
- [ ] Envoyer le formulaire
- [ ] Vérifier la redirection vers merci.html
- [ ] Vérifier la réception de l'email (< 30 secondes)
- [ ] Tester sur mobile

## ❓ Dépannage

### Je ne reçois pas d'email

1. **Avez-vous confirmé** lors du premier envoi ?
2. Vérifiez les **spams** de contact@fbrlabs.fr
3. Vérifiez l'adresse dans le code (index.html ligne ~678)

### La page merci.html ne s'affiche pas

1. Vérifiez que le fichier existe
2. Utilisez l'URL complète : `https://www.fbrlabs.fr/merci.html`

### L'email contient "undefined"

Vérifiez que tous les champs ont un attribut `name=""` :
```html
<input type="text" id="name" name="name" ...>
```

## 🔒 Sécurité

### Honeypot anti-spam

Le formulaire inclut un champ caché invisible :
```html
<input type="text" name="_honey" style="display:none">
```

⚠️ **Ne supprimez pas ce champ !** Il protège contre les robots spam.

### Conformité RGPD

- ✅ Consentement explicite obligatoire
- ✅ Lien vers politique de confidentialité
- ✅ Pas de stockage par FormSubmit
- ✅ Données transférées uniquement par email

## 📊 Statistiques

Si Google Analytics est configuré, chaque envoi de formulaire est tracké comme :
- Événement : "form_submission"
- Catégorie : "conversion"
- Label : "Contact Form"

## 💡 Avantages FormSubmit

- ✅ **Gratuit et illimité**
- ✅ **Aucun code backend**
- ✅ **Emails en ~30 secondes**
- ✅ **Protection anti-spam**
- ✅ **Compatible tous hébergeurs**

## 📞 Support FormSubmit

- Documentation : https://formsubmit.co/documentation
- FAQ : https://formsubmit.co/faq
- Contact : team@formsubmit.co

## ✅ Checklist finale

Avant la mise en production :

- [ ] Envoyer un formulaire de test
- [ ] Confirmer l'email FormSubmit
- [ ] Vérifier la réception de l'email
- [ ] Tester merci.html
- [ ] Tester sur mobile
- [ ] Configurer Google Analytics (optionnel)

---

**Status** : ✅ Prêt à être activé
**Date** : Février 2026
