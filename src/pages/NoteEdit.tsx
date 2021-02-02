import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AppState } from 'store'
import { getCurrentNote, updateCurrentNote } from 'store/reducers'

import { BoardLayout } from 'layouts'
import { Button, InputField, TextareaField } from 'components'

const schema = yup.object().shape({
  name: yup.string().required('Note name not be empty'),
  content: yup.string().required('Note content not be empty')
})

export const NoteEdit: FC = () => {
  const dispatch = useDispatch()
  const [isFetching, setIsFetching] = useState(false)
  const { currentNote } = useSelector((state: AppState) => state.notes)
  const { id } = useParams() as { id: string }
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    dispatch(getCurrentNote(id))
  }, [])

  useEffect(() => {
    setValue('name', currentNote.name)
    setValue('content', currentNote.content)
  }, [currentNote])

  const formSubmit = async (data: Note) => {
    setIsFetching(true)
    dispatch(updateCurrentNote(id, data))
    setIsFetching(false)
  }

  return (
    <BoardLayout title='Edit note'>
      <form className='note-edit__form' noValidate onSubmit={handleSubmit(formSubmit)}>
        <InputField
          name='name'
          placeholder='Note name'
          ref={register}
          error={!!errors.name}
          errorText={errors?.name?.message}
        />
        <TextareaField
          rows={6}
          name='content'
          placeholder='Note content'
          ref={register}
          error={!!errors.content}
          errorText={errors?.content?.message}
        />
        <Button htmlType='submit' disabled={isFetching}>Update changes</Button>
      </form>
    </BoardLayout>
  )
}