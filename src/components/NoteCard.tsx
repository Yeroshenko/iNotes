import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'components'
import 'styles/components/note-card.sass'

import { ReactComponent as EditIcon } from 'assets/icons/edit.svg'
import { ReactComponent as CommentsIcon } from 'assets/icons/comments.svg'

type NoteCardProps = {
  name: string,
  content: string
  id: string
}

export const NoteCard: FC<NoteCardProps> = ({ name, content, id }) => (
  <div className='note-card'>
    <div className='note-card__name'>{name}</div>
    <div className='note-card__content'>{content}</div>
    <Link to={'note/' + id}>
      <Button className='note-card__comments' type='secondary' shape='circle' icon={<CommentsIcon />} />
    </Link>
    <Link to={'edit/' + id}>
      <Button className='note-card__edit' type='secondary' shape='circle' icon={<EditIcon />} />
    </Link>
  </div>
)