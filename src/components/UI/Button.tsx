import { FC, ReactNode } from 'react'
import cn from 'classnames'

import 'styles/components/button.sass'

type ButtonPros = {
  icon?: ReactNode
  className?: string
  shape?: 'circle' | 'round'
  disabled?: boolean
  type?: 'primary' | 'secondary'
  htmlType?: 'submit' | 'button' | 'reset'
}

export const Button: FC<ButtonPros> = (
  {
    icon,
    className,
    shape = 'round',
    htmlType = 'button',
    type = 'primary',
    disabled = false,
    children,
  }
) => {

  const classList = cn(
    'button',
    className,
    { 'button--disabled': disabled },
    { 'button--secondary': type === 'secondary' },
    { 'button--has-icon': icon },
    { 'button--circle': shape === 'circle' }
  )

  return (
    <button className={classList} type={htmlType} disabled={disabled}>
      {children}
      {icon && icon}
    </button>
  )
}