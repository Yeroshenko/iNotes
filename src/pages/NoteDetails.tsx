import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'store'
import { getCurrentNote } from 'store/reducers'

import { BoardLayout } from 'layouts'

import { FirebaseService, LocalStorageService } from '../services'

const fire = new FirebaseService()
const local = new LocalStorageService()

export const NoteDetails: FC = () => {
  const dispatch = useDispatch()
  const { currentNote } = useSelector((state: AppState) => state.notes)
  const { id } = useParams() as { id: string }

  useEffect(() => {
    dispatch(getCurrentNote(id))

    fire.getComments(id).then(i => console.log(i))
  }, [])

  return (
    <BoardLayout title={currentNote.name}>
      <div className='note-detail__content'>{currentNote.content}</div>
    </BoardLayout>
  )
}