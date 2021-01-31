import firebase from 'firebase'

export const firebaseDocTransform = (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => ({
  id: doc.id,
  ...doc.data()
})