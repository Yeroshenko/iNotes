type Note = {
  name: string
  content: string
  id: string
}

type NoteWithoutId = {
  name: string
  content: string
}

type NotesList = Array<Note>

type CommentWithoutId = {
  author: string
  content: string
  createdAt: string
  noteId: string
}

type Comment = {
  id?: string
  author: string
  content: string
  createdAt: string
  noteId: string
}

type CommentList = Array<Comment>
