import { forwardRef, ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'

import 'styles/components/textarea-field.sass'

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  errorText?: string
  error?: boolean
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
     errorText,
     error = false,
     ...props
   },
   ref) => {

    return (
      <div className='textarea-field'>
        <div className={cn('textarea-field__wrap', { 'textarea-field__wrap--error': error })}>
          <textarea
            ref={ref}
            {...props}
            className={cn('textarea-field__textarea', { 'textarea-field__textarea--error': error })}
          />
        </div>
        {errorText && <span className='textarea-field__error-text'>{errorText}</span>}
      </div>
    )
  })