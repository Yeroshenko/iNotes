import { forwardRef, ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

import 'styles/components/input-field.sass'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorText?: string
  error?: boolean
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({
     errorText,
     error = false,
     ...props
   },
   ref) => {

    return (
      <div className='input-field'>
        <div className={cn('input-field__wrap', { 'input-field__wrap--error': error })}>
          <input className={cn('input-field__input', { 'input-field__input--error': error })} ref={ref} {...props} />
        </div>
        {errorText && <span className='input-field__error-text'>{errorText}</span>}
      </div>
    )
  })