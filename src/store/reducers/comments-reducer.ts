import { ThunkAction } from 'redux-thunk'

import { AppState } from '../index'

const SET_COMMENTS = 'COMMENTS:SET_COMMENTS'
const SET_COMMENT = 'COMMENTS:SET_COMMENT'

type Comments = CommentList | []

const initialState = {
  comments: [] as CommentList,
  currentNote: {
    author: '',
    content: '',
    createdAt: null,
    noteId: ''
  }
}

type Actions =
  | SetComments
  | SetComment


type InitialState = typeof initialState

export const commentsReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.comments }

    case SET_COMMENT:
      return { ...state, comments: [...state.comments, action.comment] }

    default:
      return state
  }
}


type SetComments = { type: typeof SET_COMMENTS, comments: Comments }
type SetComment = { type: typeof SET_COMMENT, comment: Comment }


export const setComments = (comments: Comments): SetComments => ({ type: SET_COMMENTS, comments })
export const setComment = (comment: Comment): SetComment => ({ type: SET_COMMENT, comment })


type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const getComments = (nodeId: string): ThunkType => {
  return async (dispatch, getState) => {

    const currentService = getState().service.service
    const commentsList = await currentService.getComments(nodeId)
    dispatch(setComments(commentsList))
  }
}

export const createComment = (comment: CommentWithoutId): ThunkType => {
  return async (dispatch, getState) => {
    const currentService = getState().service.service

    const newComment = await currentService.createComment(comment) as Comment
    dispatch(setComment(newComment))
  }
}
