import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDU5TPgNuDloE8fvhSeV6iXkXRSNTjLVsI",
  authDomain: "inotes-app.firebaseapp.com",
  projectId: "inotes-app",
  storageBucket: "inotes-app.appspot.com",
  messagingSenderId: "382821792384",
  appId: "1:382821792384:web:63a2c328f2ede93b634465"
})

export const db = firebase.firestore()