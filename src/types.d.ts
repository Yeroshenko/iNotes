type Note = {
  name: string
  content: string
  id: string
}

type NotesList = Array<Note>

type Comment = {
  author: string
  content: string
  createdAt: Date
  noteId: string
}

type CommentList = Array<Comment>
