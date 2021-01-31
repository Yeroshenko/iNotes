import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'store'
import { getNotes } from 'store/reducers'

import { BoardLayout } from 'layouts'
import { NoteCard, Loader } from 'components'

import 'styles/pages/all-notes.sass'

export const AllNotes: FC = () => {
  const dispatch = useDispatch()
  const { notes, isFetching } = useSelector((state: AppState) => state.notes)

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <BoardLayout title='All Notes'>
      <div className='all-notes'>

        {!notes.length && isFetching && <Loader /> }

        {!!notes.length &&
          (notes as NotesList).map(({ id, name, content }: Note) =>
            <NoteCard key={id} name={name} content={content} id={id} />
          )
        }

      </div>
    </BoardLayout>
  )
}
