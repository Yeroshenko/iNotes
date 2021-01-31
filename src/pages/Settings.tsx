import { ChangeEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FIREBASE, LOCALSTORAGE } from 'consts'
import { AppState } from 'store'
import { setFirebaseService, setLocalStorageService } from 'store/reducers'

import { BoardLayout } from 'layouts'
import { InputRadio } from 'components'

import 'styles/pages/settings.sass'


export const Setting: FC = () => {
  const dispatch = useDispatch()
  const currentServiceName = useSelector((state: AppState) => state.service.service.name)

  const radioChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case FIREBASE:
        dispatch(setFirebaseService())
        break
      case LOCALSTORAGE:
        dispatch(setLocalStorageService())
        break
    }
  }

  const isCurrentService = (serviceName: string) => currentServiceName === serviceName

  return (
    <BoardLayout title='Settings'>
      <form className='setting__form'>
        <InputRadio
          value={FIREBASE}
          checked={isCurrentService(FIREBASE)}
          label='Firebase'
          name='service'
          onChange={radioChangeHandler}
        />
        <InputRadio
          value={LOCALSTORAGE}
          checked={isCurrentService(LOCALSTORAGE)}
          label='Local storage'
          name='service'
          onChange={radioChangeHandler}
        />
      </form>
    </BoardLayout>
  )
}