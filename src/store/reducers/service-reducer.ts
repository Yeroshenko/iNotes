import { LocalStorageService, FirebaseService } from 'services'

const SET_SERVICE = 'SERVICE:SET_SERVICE'

const initialState = {
  service: new FirebaseService() as Service
}

type Actions = SetFirebaseService | SetLocalStorageService

type Service = LocalStorageService | FirebaseService

type InitialState = typeof initialState

export const serviceReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case SET_SERVICE:
      return { ...state, service: action.service }

    default:
      return state
  }
}

type SetLocalStorageService = { type: typeof SET_SERVICE, service: LocalStorageService }
type SetFirebaseService = { type: typeof SET_SERVICE, service: FirebaseService }

export const setLocalStorageService = (): SetLocalStorageService => (
  { type: SET_SERVICE, service: new LocalStorageService() }
)

export const setFirebaseService = (): SetFirebaseService => (
  { type: SET_SERVICE, service: new FirebaseService() }
)
