import { FC } from 'react'

import { Navbar, PageTitle } from 'components'
import 'styles/layouts/board-layout.sass'

type BoardLayoutProps = {
  title?: string
}

export const BoardLayout: FC<BoardLayoutProps> = ({ children, title }) => (
  <div className='board-layout'>
    <div className='board-layout__inner'>
      <div className='board-layout__navbar'>
        <Navbar />
      </div>
      <div className='board-layout__content'>
        {title && <PageTitle className='board-layout__title'>{title}</PageTitle>}
        {children}
      </div>
    </div>
  </div>
)