import { FC } from 'react'

import { parseIsoDate } from 'utils'
import 'styles/components/comment.sass'

type CommentProps = {
  content: 'string',
  author: 'string'
  createdAt: 'string'
}

export const Comment: FC<CommentProps> = ({ content, author, createdAt }) => {
  return (
    <div className='comment'>
      <div className='comment__info'>
        <div className='comment__author'>{author}</div>
        <div className='comment__created-at'>{parseIsoDate(createdAt)}</div>
      </div>
      <div className='comment__content'>{content}</div>
    </div>
  )
}