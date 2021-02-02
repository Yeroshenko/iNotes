import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppState } from 'store'
import { getCurrentNote, getComments, createComment } from 'store/reducers'

import { BoardLayout } from 'layouts'
import { Button, Comment, InputField, Loader, TextareaField } from 'components'

import 'styles/pages/note-details.sass'

type formData = {
  author: string
  content: string
}

const schema = yup.object().shape({
  author: yup.string().required('Name is a required'),
  content: yup.string().required('Comment can not be empty')
})

export const NoteDetails: FC = () => {
  const dispatch = useDispatch()
  const [visibleCommentForm, setVisibleCommentForm] = useState(false)
  const { currentNote } = useSelector((state: AppState) => state.notes)
  const { comments } = useSelector((state: AppState) => state.comments)
  const { id } = useParams() as { id: string }
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  const showVisibleForm = () => setVisibleCommentForm(true)

  const formSubmit = async (data: formData) => {
    const comment = {
      ...data,
      createdAt: new Date().toISOString(),
      noteId: id
    }

    reset()
    await dispatch(createComment(comment))
  }


  useEffect(() => {
    dispatch(getCurrentNote(id))
    dispatch(getComments(id))
  }, [])

  return (
    <BoardLayout title={currentNote.name}>
      {currentNote.content ?
        <div className='note-details'>
          <div className='note-details__content'>{currentNote.content}</div>
          <div className='note-details__comments'>
            <div className='note-details__comments-title'>Comments</div>
            {!!comments.length &&
              // @ts-ignore
              (comments as CommentList).map(({ author, id, createdAt, content }) =>
                <Comment author={author} key={id} createdAt={createdAt} content={content} />
              )
            }
          </div>
          <div className='note-details__add-comment'>
            {!visibleCommentForm
              ? <Button onClick={showVisibleForm}>Add comments</Button>
              : <form className='note-details__form' noValidate onSubmit={handleSubmit(formSubmit)}>
                <InputField
                  name='author'
                  placeholder='Enter your name'
                  ref={register}
                  error={!!errors.author}
                  errorText={errors?.author?.message}
                />
                <TextareaField
                  rows={6}
                  name='content'
                  placeholder='Enter your comment'
                  ref={register}
                  error={!!errors.content}
                  errorText={errors?.content?.message}
                />
                <Button htmlType='submit'>Add comment</Button>
              </form>
            }
          </div>
        </div>
        : <Loader />
      }
    </BoardLayout>
  )
}