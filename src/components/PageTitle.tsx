import { FC } from 'react'
import cn from 'classnames'

import 'styles/components/page-title.sass'

type PageTitleProps = {
  className?: string
}

export const PageTitle: FC<PageTitleProps> = ({ children, className }) => (
  <h1 className={cn('page-title', className)}>{children}</h1>
)