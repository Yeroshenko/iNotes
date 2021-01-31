import { ChangeEvent, FC } from 'react'
import cn from 'classnames'

import 'styles/components/input-radio.sass'

type InputRadioProps = {
  className?: string
  name: string
  label: string
  value: string
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputRadio: FC<InputRadioProps> = ({ className, label, name, value, onChange, checked }) => (
  <>
    <label className={cn('input-radio', className)}>
      <input
        type='radio'
        className='input-radio-input'
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span />
      {label}
    </label>
  </>
)