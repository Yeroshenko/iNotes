import { FIREBASE } from 'consts'
import { db } from 'services/firebase-config'
import { firebaseDocTransform } from 'utils/firebaseDocumentTransform'


export class FirebaseService {
  name = FIREBASE

  createNote(data: Note) {
    return db
      .collection('notes')
      .add(data)
      .then(docRef => docRef.get())
      .then(firebaseDocTransform)
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }

  getAllNotes() {
    return db
      .collection('notes')
      .get()
      .then<any>(snapshot => snapshot.docs.map(firebaseDocTransform))
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }

  getNote(id: string) {
    return db
      .collection('notes')
      .doc(id)
      .get()
      .then<any>(firebaseDocTransform)
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }

  getComments(noteId: string) {
    return db
      .collection('comments')
      .where('note_id', '==', noteId)
      .get()
      .then<any>(snapshot => snapshot.docs.map(firebaseDocTransform))
      .catch(error => {
        console.log('Error getting documents: ', error)
      })
  }

  setComment(comment: Comment) {
    return db
      .collection('comments')
      .add(comment)
      .then(docRef => docRef.get())
      .then<any>(firebaseDocTransform)
      .catch(error => {
        console.error('Error adding document: ', error)
      })
  }
}
