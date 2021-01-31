import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '../index'

const SET_IS_FETCHING = 'NOTES:SET_IS_FETCHING'
const SET_NOTES = 'NOTES:SET_NOTES'
const SET_NOTE = 'NOTES:SET_NOTE'
const SET_CURRENT_NOTE = 'NOTES:SET_CURRENT_NOTE'

type Notes = NotesList | []

const initialState = {
  notes: [] as Notes,
  isFetching: false,
  currentNote: {
    id: '',
    name: '',
    content: ''
  } as Note
}

type Actions =
  | SetIsFetching
  | SetNotes
  | SetNote
  | SetCurrentNote

type InitialState = typeof initialState

export const notesReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case SET_NOTES:
      return { ...state, notes: action.notes }

    case SET_NOTE:
      return { ...state, notes: [...state.notes, action.note] }

    case SET_CURRENT_NOTE:
      return { ...state, currentNote: { ...action.note } }

    default:
      return state
  }
}

type SetIsFetching = { type: typeof SET_IS_FETCHING, isFetching: boolean }
type SetNotes = { type: typeof SET_NOTES, notes: Notes }
type SetNote = { type: typeof SET_NOTE, note: Note }
type SetCurrentNote = { type: typeof SET_CURRENT_NOTE, note: Note }


export const setNotes = (notes: Notes): SetNotes => ({ type: SET_NOTES, notes })
export const setNote = (note: Note): SetNote => ({ type: SET_NOTE, note })
export const setCurrentNote = (note: Note): SetCurrentNote => ({ type: SET_CURRENT_NOTE, note })
export const setIsFetching = (isFetching: boolean): SetIsFetching => ({ type: SET_IS_FETCHING, isFetching })


// type DispatchType = Dispatch<Actions>
type ThunkType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const getNotes = (): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(setIsFetching(true))

    const currentService = getState().service.service
    const notesList = await currentService.getAllNotes()

    dispatch(setNotes(notesList))
    dispatch(setIsFetching(false))
  }
}

export const createNote = (note: Note): ThunkType => {
  return async (dispatch, getState) => {
    const currentService = getState().service.service
    const newNote = await currentService.createNote(note) as Note

    dispatch(setNote(newNote))
  }
}

export const getCurrentNote = (noteId: string): ThunkType => {
  return async (dispatch, getState) => {
    const currentService = getState().service.service
    const currentNote = await currentService.getNote(noteId)

    dispatch(setCurrentNote(currentNote))
  }
}