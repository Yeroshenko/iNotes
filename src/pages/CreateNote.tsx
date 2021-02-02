import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { BoardLayout } from 'layouts'
import { Button, InputField, TextareaField } from 'components'

import 'styles/pages/create-note.sass'
import { createNote } from '../store/reducers'

const schema = yup.object().shape({
  name: yup.string().required('Note name is a required'),
  content: yup.string().required('Note can not be empty')
})

export const CreateNote: FC = () => {
  const dispatch = useDispatch()
  const [isFetching, setIsFetching] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })

  const formSubmit = async (data: Note) => {
    setIsFetching(true)
    await dispatch(createNote(data))
    reset()
    setIsFetching(false)
  }

  return (
    <BoardLayout title='Create Note'>
      <form className='create-note__form' noValidate onSubmit={handleSubmit(formSubmit)}>
        <InputField
          name='name'
          placeholder='Enter note name'
          ref={register}
          error={!!errors.name}
          errorText={errors?.name?.message}
        />
        <TextareaField
          rows={6}
          name='content'
          placeholder='Type here'
          ref={register}
          error={!!errors.content}
          errorText={errors?.content?.message}
        />
        <Button htmlType='submit' disabled={isFetching}>Save note</Button>
      </form>
    </BoardLayout>
  )
}