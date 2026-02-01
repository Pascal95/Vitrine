# Guide Backend - Envoi d'emails pour les demandes de devis

## 🎯 Solutions recommandées par ordre de simplicité

---

## ⭐ Solution 1 : FormSubmit (RECOMMANDÉE - LA PLUS SIMPLE)

### Pourquoi FormSubmit ?
- ✅ **Gratuit et illimité**
- ✅ **Zéro configuration backend**
- ✅ **Pas d'inscription requise**
- ✅ **Protection anti-spam avec reCAPTCHA**
- ✅ **Fonctionne avec n'importe quel hébergement**
- ✅ **Redirection automatique après envoi**

### Installation (5 minutes)

#### Étape 1 : Modifier le formulaire

Dans `index.html`, remplacez la balise `<form>` (ligne ~493) :

```html
<!-- AVANT -->
<form id="contactForm" novalidate>

<!-- APRÈS -->
<form id="contactForm" action="https://formsubmit.co/contact@fbrshot.fr" method="POST">
```

#### Étape 2 : Ajouter les champs cachés de configuration

Juste après l'ouverture du `<form>`, ajoutez :

```html
<form id="contactForm" action="https://formsubmit.co/contact@fbrshot.fr" method="POST">

  <!-- Configuration FormSubmit -->
  <input type="hidden" name="_subject" value="Nouvelle demande de devis - FBR Shot">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="box">
  <input type="hidden" name="_next" value="https://www.fbrshot.fr/merci.html">

  <!-- Vos champs existants... -->
```

#### Étape 3 : Vérification du premier email

1. La **première fois** qu'un formulaire est envoyé, FormSubmit vous envoie un email de confirmation
2. Cliquez sur le lien de confirmation dans cet email
3. Les emails suivants arriveront automatiquement

#### Étape 4 : Options avancées (optionnelles)

```html
<!-- Copie à une autre adresse -->
<input type="hidden" name="_cc" value="admin@fbrshot.fr">

<!-- Désactiver CAPTCHA (si vous n'avez pas de spam) -->
<input type="hidden" name="_captcha" value="false">

<!-- Ou activer reCAPTCHA v3 (recommandé) -->
<input type="hidden" name="_captcha" value="true">

<!-- URL de redirection après envoi -->
<input type="hidden" name="_next" value="https://www.fbrshot.fr/merci.html">

<!-- Ne pas montrer l'IP du visiteur dans l'email -->
<input type="hidden" name="_blacklist" value="_ip">

<!-- Format de l'email (box, table, plain) -->
<input type="hidden" name="_template" value="box">
```

### Avantages
- ✅ Mise en place en 5 minutes
- ✅ Aucun code serveur nécessaire
- ✅ Protection anti-spam intégrée
- ✅ Format d'email professionnel

### Inconvénients
- ⚠️ Dépendance à un service tiers
- ⚠️ Pas de base de données automatique
- ⚠️ Validation côté client uniquement

---

## 🔥 Solution 2 : EmailJS (Service JavaScript)

### Pourquoi EmailJS ?
- ✅ **200 emails/mois gratuits**
- ✅ **Templates d'emails personnalisables**
- ✅ **Dashboard avec statistiques**
- ✅ **Pas de backend nécessaire**

### Installation (15 minutes)

#### Étape 1 : Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Ajoutez un service email (Gmail, Outlook, etc.)

#### Étape 2 : Créer un template d'email
Dans le dashboard EmailJS :
- Nom : "Demande de devis FBR Shot"
- Contenu :
```
Nouvelle demande de devis

Nom : {{name}}
Email : {{email}}
Téléphone : {{phone}}
Type d'événement : {{eventType}}
Date : {{eventDate}}

Message :
{{message}}
```

#### Étape 3 : Obtenir vos identifiants
- Service ID : `service_xxxxxxx`
- Template ID : `template_xxxxxxx`
- Public Key : `votre_cle_publique`

#### Étape 4 : Installer EmailJS

Ajoutez dans `index.html` avant `</head>` :
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("VOTRE_PUBLIC_KEY");
  })();
</script>
```

#### Étape 5 : Créer le script d'envoi

Créez `assets/js/email-handler.js` :

```javascript
// Configuration EmailJS
const EMAIL_CONFIG = {
  serviceID: 'service_xxxxxxx',
  templateID: 'template_xxxxxxx'
};

// Gestionnaire de formulaire
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  // Désactiver le bouton
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';

  // Récupérer les données
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value || 'Non renseigné',
    eventType: document.getElementById('eventType').value,
    eventDate: document.getElementById('eventDate').value || 'Non renseignée',
    message: document.getElementById('message').value
  };

  try {
    // Envoyer via EmailJS
    await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templateID,
      formData
    );

    // Succès
    showMessage('success', '✅ Votre demande a été envoyée avec succès !');
    this.reset();

    // Tracking Google Analytics (si configuré)
    if (window.gtag) {
      gtag('event', 'form_submission', {
        'event_category': 'contact',
        'event_label': 'Demande de devis'
      });
    }

  } catch (error) {
    console.error('Erreur:', error);
    showMessage('error', '❌ Une erreur est survenue. Veuillez réessayer.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

function showMessage(type, text) {
  const feedback = document.getElementById('formFeedback');
  feedback.className = type === 'success' ? 'alert alert-success' : 'alert alert-error';
  feedback.textContent = text;
  feedback.style.display = 'block';

  setTimeout(() => {
    feedback.style.display = 'none';
  }, 5000);
}
```

#### Étape 6 : Inclure le script

Dans `index.html` avant `</body>` :
```html
<script src="assets/js/email-handler.js"></script>
```

### Avantages
- ✅ Dashboard avec statistiques
- ✅ Templates personnalisables
- ✅ Envoi à plusieurs destinataires
- ✅ Auto-réponse possible

### Inconvénients
- ⚠️ Limite de 200 emails/mois (gratuit)
- ⚠️ Nécessite une inscription
- ⚠️ Clé publique visible dans le code

---

## 💻 Solution 3 : Backend PHP (OVHcloud)

### Pourquoi PHP ?
- ✅ **Compatible avec OVHcloud**
- ✅ **Contrôle total**
- ✅ **Peut sauvegarder en base de données**
- ✅ **Validation côté serveur**

### Installation (30 minutes)

#### Fichier `contact.php` :

```php
<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Configuration email
$to = "contact@fbrshot.fr";
$subject_prefix = "Demande de devis - FBR Shot";

// Vérification méthode POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupération et validation des données
$name = filter_var($_POST['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING);
$eventType = filter_var($_POST['eventType'] ?? '', FILTER_SANITIZE_STRING);
$eventDate = filter_var($_POST['eventDate'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);

// Validation
$errors = [];
if (empty($name)) $errors[] = "Le nom est requis";
if (!$email) $errors[] = "L'email est invalide";
if (empty($eventType)) $errors[] = "Le type d'événement est requis";
if (empty($message)) $errors[] = "Le message est requis";

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Protection anti-spam simple (honeypot)
if (!empty($_POST['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam détecté']);
    exit;
}

// Construction du message
$subject = "$subject_prefix - $eventType";

$email_body = "Nouvelle demande de devis\n\n";
$email_body .= "Nom : $name\n";
$email_body .= "Email : $email\n";
$email_body .= "Téléphone : " . ($phone ?: 'Non renseigné') . "\n";
$email_body .= "Type d'événement : $eventType\n";
$email_body .= "Date de l'événement : " . ($eventDate ?: 'Non renseignée') . "\n\n";
$email_body .= "Message :\n$message\n\n";
$email_body .= "---\n";
$email_body .= "Envoyé depuis www.fbrshot.fr le " . date('d/m/Y à H:i') . "\n";

// Headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi de l'email
if (mail($to, $subject, $email_body, $headers)) {
    // Optionnel : Sauvegarder dans une base de données
    // saveToDatabase($name, $email, $phone, $eventType, $eventDate, $message);

    echo json_encode([
        'success' => true,
        'message' => 'Votre demande a été envoyée avec succès !'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi. Veuillez réessayer.'
    ]);
}

// Fonction optionnelle pour sauvegarder en BDD
function saveToDatabase($name, $email, $phone, $eventType, $eventDate, $message) {
    $host = 'localhost';
    $dbname = 'votre_base';
    $username = 'votre_user';
    $password = 'votre_password';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("
            INSERT INTO contacts (name, email, phone, event_type, event_date, message, created_at)
            VALUES (:name, :email, :phone, :event_type, :event_date, :message, NOW())
        ");

        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone' => $phone,
            ':event_type' => $eventType,
            ':event_date' => $eventDate,
            ':message' => $message
        ]);

        return true;
    } catch (PDOException $e) {
        error_log("Erreur BDD: " . $e->getMessage());
        return false;
    }
}
?>
```

#### Script JavaScript pour appeler PHP :

Créez `assets/js/contact-handler.js` :

```javascript
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();

  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours...';

  const formData = new FormData(this);

  try {
    const response = await fetch('contact.php', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      showMessage('success', result.message);
      this.reset();

      // Tracking
      if (window.gtag) {
        gtag('event', 'form_submission', {
          'event_category': 'conversion',
          'event_label': 'Contact Form'
        });
      }
    } else {
      showMessage('error', result.message);
    }
  } catch (error) {
    console.error('Erreur:', error);
    showMessage('error', 'Une erreur est survenue. Veuillez réessayer.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

function showMessage(type, text) {
  const feedback = document.getElementById('formFeedback');
  feedback.className = `alert alert-${type}`;
  feedback.textContent = text;
  feedback.style.display = 'block';

  setTimeout(() => {
    feedback.style.display = 'none';
  }, 5000);
}
```

### Avantages
- ✅ Contrôle total du processus
- ✅ Validation côté serveur sécurisée
- ✅ Possibilité de sauvegarder en BDD
- ✅ Pas de limite d'envois

### Inconvénients
- ⚠️ Nécessite un hébergement PHP
- ⚠️ Configuration serveur requise
- ⚠️ Maintenance à prévoir

---

## 🌐 Solution 4 : Serverless (Netlify/Vercel)

### Pour Netlify Functions

Créez `netlify/functions/contact.js` :

```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, phone, eventType, eventDate, message } = JSON.parse(event.body);

  // Configuration email (utilisez des variables d'environnement)
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: 'contact@fbrshot.fr',
    subject: `Demande de devis - ${eventType}`,
    text: `
Nouvelle demande de devis

Nom : ${name}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Type d'événement : ${eventType}
Date : ${eventDate || 'Non renseignée'}

Message :
${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email envoyé !' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Erreur d\'envoi' })
    };
  }
};
```

---

## 📊 Comparaison des solutions

| Solution | Difficulté | Coût | Temps setup | Contrôle | Recommandé pour |
|----------|-----------|------|-------------|----------|-----------------|
| **FormSubmit** | ⭐ Facile | Gratuit | 5 min | Moyen | Débutants, MVP |
| **EmailJS** | ⭐⭐ Moyen | Gratuit (limité) | 15 min | Bon | Petits sites |
| **PHP** | ⭐⭐⭐ Difficile | Gratuit | 30 min | Total | Sites OVHcloud |
| **Serverless** | ⭐⭐⭐⭐ Expert | Gratuit (limité) | 45 min | Total | Sites modernes |

---

## 🎯 Ma recommandation

### Pour démarrer rapidement : **FormSubmit**
- Configuration en 5 minutes
- Aucun code backend
- Parfait pour tester votre site

### Pour plus de contrôle : **PHP avec PHPMailer**
- Compatible avec votre hébergement OVHcloud
- Permet de sauvegarder dans une base de données
- Validation serveur sécurisée

---

## 🔒 Sécurité importante

Quel que soit votre choix :

1. **Ajoutez un honeypot** (champ caché anti-spam)
2. **Activez reCAPTCHA** si vous avez du spam
3. **Validez toujours côté serveur** (si backend)
4. **Limitez le taux d'envoi** pour éviter les abus
5. **Ne stockez jamais de mots de passe en clair**

---

## 📧 Configuration SMTP OVHcloud

Si vous utilisez PHP, configurez le SMTP OVHcloud :

```php
// Configuration SMTP OVHcloud
$config = [
    'host' => 'ssl0.ovh.net',
    'port' => 587,
    'username' => 'contact@fbrshot.fr',
    'password' => 'votre_mot_de_passe',
    'encryption' => 'tls'
];
```

---

**Besoin d'aide pour l'implémentation ?** Je peux vous aider à mettre en place la solution que vous choisissez !
