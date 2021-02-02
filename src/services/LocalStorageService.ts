import { LOCALSTORAGE } from 'consts'
import { generateId } from 'utils'

export class LocalStorageService {
  name = LOCALSTORAGE

  createNote(data: Note) {
    const newData = { ...data, id: generateId() }
    const prevList = this.getAllNotes()
    const newList = [...prevList, newData]

    localStorage.setItem('notes', JSON.stringify(newList))
    return newData
  }

  getAllNotes() {
    const storageData = localStorage.getItem('notes')

    return storageData ? JSON.parse(storageData) : []
  }

  getNote(noteId: string) {
    const allNotes = this.getAllNotes()
    const currentNote = allNotes.filter((i: Note) => i.id === noteId)

    return currentNote[0]
  }

  updateNote(noteId: string, data: NoteWithoutId) {
    const allNotes = this.getAllNotes()

    const newList = allNotes.map((note: Note) => {
      if (note.id === noteId) {
        return { ...note, ...data }
      } else {
        return note
      }
    })

    localStorage.setItem('notes', JSON.stringify(newList))
  }


  getAllComments() {
    const storageData = localStorage.getItem('comments')

    return storageData ? JSON.parse(storageData) : []
  }

  getComments(noteId: string) {
    const allComments = this.getAllComments()

    return allComments.filter((i: Note) => i.id === noteId)
  }

  createComment(comment: CommentWithoutId) {
    const newData = {
      ...comment,
      id: generateId()
    }

    const prevList = this.getAllComments()
    const newList = [...prevList, newData]

    localStorage.setItem('comments', JSON.stringify(newList))
    return newData
  }
}