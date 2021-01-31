import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '../index'

const SET_IS_FETCHING = 'COMMENTS:SET_IS_FETCHING'
const SET_NOTES = 'COMMENTS:SET_COMMENTS'
const SET_COMMENT = 'COMMENTS:SET_COMMENT'

type Comments = CommentList | []

const initialState = {
  comments: [] as CommentList,
  isFetching: false,
  currentNote: {
    author: '',
    content: '',
    createdAt: null,
    noteId: ''
  }
}

type InitialState = typeof initialState

export const commentsReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {

    default:
      return state
  }
}
