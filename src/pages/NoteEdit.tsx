import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'store'
import { getCurrentNote } from 'store/reducers'
import { BoardLayout } from 'layouts'

export const NoteEdit: FC = () => {
  const dispatch = useDispatch()
  const { currentNote } = useSelector((state: AppState) => state.notes)
  const { id } = useParams() as { id: string }

  useEffect(() => {
    dispatch(getCurrentNote(id))
  }, [])


  return (
    <BoardLayout title={currentNote.name}>

    </BoardLayout>
  )
}