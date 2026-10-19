// Service worker des notifications push du site (Firebase Cloud Messaging).
// Doit rester à la racine du site : le SDK le cherche à /firebase-messaging-sw.js.
// Les notifications reçues site fermé ou en arrière-plan sont affichées
// automatiquement à partir du champ « notification » du message ; le lien
// ouvert au clic vient de webpush.fcmOptions.link (côté fonctions).
// La configuration ci-dessous est publique (la même que dans main.dart.js).
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDDVam7THnZWJGFMhwKZGOO14efurFUhZg',
  appId: '1:151636510424:web:57327e100bf55223b779ad',
  messagingSenderId: '151636510424',
  projectId: 'le-plateau-da593',
  authDomain: 'le-plateau-da593.firebaseapp.com',
  storageBucket: 'le-plateau-da593.firebasestorage.app',
});

firebase.messaging();
