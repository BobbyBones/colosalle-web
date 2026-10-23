# Politique de Confidentialité

**Dernière mise à jour : 22 octobre 2026**

---

## Préambule

La présente Politique de Confidentialité décrit comment **Colosalle** collecte, utilise et protège les données personnelles des utilisateurs de la Plateforme.

Cette politique est conforme au **Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)** et à la **loi Informatique et Libertés** modifiée.

---

## 1. Responsable de traitement

| Élément | Information |
|---|---|
| Responsable du traitement | **Bobby BOLLA**, entrepreneur individuel (micro-entreprise) |
| SIRET | 107 976 730 00013 |
| Adresse | **40 rue des Saussaies, 94230 Cachan** |
| Email de contact RGPD | privacy@colosalle.fr |

Aucun Délégué à la Protection des Données (DPO) n'est désigné, la nomination n'étant pas obligatoire pour la taille actuelle de la structure.

---

## 2. Données collectées

### 2.1 Données fournies par l'Utilisateur

| Catégorie | Données | Quand |
|---|---|---|
| Identification | Prénom, nom, email, mot de passe (haché) | À l'inscription |
| Profil | Photo, biographie, ville, école, disciplines, liens réseaux sociaux | Optionnel, ajouté volontairement |
| Hôte uniquement | Adresses des Espaces, descriptions, photos, prix, disponibilités, adresse d'agenda importé (iCal), utilisée uniquement pour bloquer les créneaux déjà pris | À la publication d'une annonce |
| Communication | Messages échangés entre Utilisateurs | Lors de l'utilisation du chat |
| Avis | Notes et commentaires laissés après une Réservation | À la fin d'une Réservation |

### 2.2 Données collectées automatiquement

| Catégorie | Données | Finalité |
|---|---|---|
| Technique | Type d'appareil, OS, version de l'app, identifiant de notification (application et navigateur) | Fonctionnement de l'app, notifications |
| Usage | Logs de connexion, écrans visités, actions effectuées | Amélioration du service, sécurité |
| Erreurs | Crash logs, exceptions techniques | Stabilité de l'app (via Firebase Crashlytics) |
| Géolocalisation | Position de l'appareil (avec votre accord, sur l'application mobile) | Centrer la carte sur votre position — utilisée uniquement sur l'appareil, jamais enregistrée par Colosalle |

### 2.3 Données de paiement

Les **données bancaires** (numéro de carte, IBAN) sont collectées et stockées **exclusivement par Stripe**, prestataire certifié PCI-DSS. **Colosalle n'accède ni ne stocke** ces données.

Colosalle reçoit uniquement :
- L'identifiant de transaction (paymentIntentId)
- Le montant
- Le statut (réussi, en attente, refusé)

---

## 3. Finalités du traitement

Vos données sont traitées pour les finalités suivantes :

| Finalité | Base légale (RGPD) |
|---|---|
| Création et gestion de votre compte | Exécution du contrat (art. 6.1.b) |
| Mise en relation Artiste/Hôte | Exécution du contrat (art. 6.1.b) |
| Traitement des paiements | Exécution du contrat (art. 6.1.b) |
| Envoi de notifications transactionnelles (réservation, message) | Exécution du contrat (art. 6.1.b) |
| Lutte contre la fraude et sécurité | Intérêt légitime (art. 6.1.f) |
| Amélioration de la Plateforme | Intérêt légitime (art. 6.1.f) |
| Respect des obligations légales (fiscales, comptables) | Obligation légale (art. 6.1.c) |
| Communication marketing (newsletter, promotions) | Consentement (art. 6.1.a) — non activé à ce stade |

---

## 4. Destinataires des données

Vos données peuvent être partagées avec :

### 4.1 Sous-traitants techniques
Colosalle s'appuie sur les sous-traitants suivants, qui agissent sur instructions et sont contractuellement engagés à respecter le RGPD :

| Prestataire | Service | Localisation |
|---|---|---|
| Google Cloud / Firebase | Authentification, base de données, stockage, notifications | UE (Irlande) |
| Stripe Payments Europe | Traitement des paiements | UE (Irlande) |
| Resend | Envoi d'emails transactionnels | États-Unis (avec garanties RGPD) |
| Google Sign-In | Authentification optionnelle via compte Google | UE (Irlande) |
| Apple | Authentification optionnelle via Connexion avec Apple | UE (Irlande) |
| Google Maps Platform | Affichage des cartes | UE (Irlande) |
| Vercel | Hébergement du site colosalle.fr | États-Unis (avec garanties RGPD) |

### 4.2 Autres Utilisateurs
Certaines informations de profil (prénom, photo, ville, biographie) sont visibles par les autres Utilisateurs lorsqu'ils consultent une Réservation, une conversation ou une annonce vous concernant.

### 4.3 Administration française
Conformément à l'article 242 bis du Code général des impôts, Colosalle peut transmettre vos données fiscales (en tant qu'Hôte) à l'administration française au-delà de **3 000 € de revenus OU 20 transactions par an**.

---

## 5. Transferts hors UE

Certains de nos sous-traitants (notamment **Resend** et **Vercel**) sont basés aux **États-Unis**. Les transferts sont encadrés par les **clauses contractuelles types** approuvées par la Commission européenne, ou par d'autres garanties appropriées (Data Privacy Framework).

---

## 6. Durée de conservation

| Type de donnée | Durée de conservation |
|---|---|
| Compte utilisateur actif | Pendant toute la durée du compte |
| Compte supprimé | Suppression immédiate des données personnelles, archivage anonymisé pour statistiques |
| Données de transaction (factures, paiements) | 10 ans (obligation légale comptable) |
| Logs techniques | 12 mois maximum |
| Données de prospection (si applicable) | 3 ans après le dernier contact |
| Messages entre utilisateurs | Conservés tant que le compte est actif |

---

## 7. Vos droits

Conformément au RGPD, vous disposez des droits suivants :

| Droit | Description |
|---|---|
| **Droit d'accès** | Obtenir une copie de vos données |
| **Droit de rectification** | Corriger des données inexactes |
| **Droit à l'effacement** ("droit à l'oubli") | Demander la suppression de vos données (hors obligations légales) |
| **Droit à la limitation** | Demander la suspension temporaire du traitement |
| **Droit à la portabilité** | Récupérer vos données dans un format structuré |
| **Droit d'opposition** | Vous opposer à un traitement basé sur l'intérêt légitime |
| **Droit de retirer son consentement** | À tout moment, sans affecter la licéité des traitements antérieurs |

### Comment exercer ces droits ?
Envoyez un email à **privacy@colosalle.fr** depuis l'adresse associée à votre compte, en précisant :
- Votre identité
- Le droit que vous souhaitez exercer
- Tout document utile à la prise en compte de votre demande

Nous nous engageons à répondre dans un délai maximum de **1 mois**.

### Réclamation à la CNIL
Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la **CNIL** (Commission Nationale de l'Informatique et des Libertés) :
- En ligne : **www.cnil.fr/plaintes**
- Par courrier : 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07

---

## 8. Sécurité des données

Colosalle met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :

- Chiffrement des communications (HTTPS / TLS)
- Authentification sécurisée via Firebase Auth
- Mots de passe stockés hachés (jamais en clair)
- Données de paiement gérées exclusivement par Stripe (certifié PCI-DSS niveau 1)
- Accès aux données limité aux personnes autorisées
- Surveillance des accès suspects

En cas de **violation de données personnelles** susceptible d'engendrer un risque pour vos droits et libertés, vous serez notifié dans les meilleurs délais, conformément à l'article 34 du RGPD.

---

## 9. Cookies et traceurs

L'application et le site colosalle.fr utilisent uniquement des **identifiants techniques** strictement nécessaires à leur fonctionnement (token de session conservé dans le stockage du navigateur ou de l'appareil, identifiant de notification). Ces identifiants ne sont pas soumis au consentement préalable car indispensables à la fourniture du service demandé.

L'application et le site **n'utilisent pas** de cookies publicitaires ou de traceurs tiers à des fins marketing.

**Mesure d'audience anonyme** : le site et l'application comptent, sans cookie ni identifiant, le nombre de consultations des annonces et de clics sur certains boutons (« Réserver », « Proposer un lieu »). Seuls des totaux par jour sont conservés ; ils ne permettent pas d'identifier ou de suivre une personne.

---

## 10. Mineurs

L'utilisation de la Plateforme est **réservée aux personnes majeures (18 ans révolus)**. Aucune collecte de données concernant des mineurs n'est intentionnelle. Si nous apprenons qu'un compte appartient à un mineur, nous procéderons à sa suppression immédiate.

---

## 11. Modifications de la politique

La présente Politique de Confidentialité peut être modifiée à tout moment. Les modifications substantielles seront notifiées par email et/ou notification dans l'application, avec un préavis de **30 jours**.

---

## 12. Contact

Pour toute question concernant le traitement de vos données :
- **Email** : privacy@colosalle.fr
- **Adresse postale** : **40 rue des Saussaies, 94230 Cachan**

---

*Document conforme au RGPD et à la loi Informatique et Libertés. Pour toute réclamation, vous pouvez saisir la CNIL : www.cnil.fr.*