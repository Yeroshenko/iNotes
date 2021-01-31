import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, Logo } from 'components'
import 'styles/components/navbar.sass'

import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import { ReactComponent as SettingIcon } from 'assets/icons/settings.svg'

export const Navbar: FC = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Logo />
      </div>
      <div className='navbar__buttons'>
        <Link to='/create'>
          <Button icon={<PlusIcon />} shape='circle' />
        </Link>
        <Link to='/'>
          <Button icon={<HomeIcon />} shape='circle' />
        </Link>
        <Link to='/settings'>
          <Button icon={<SettingIcon />} shape='circle' />
        </Link>

      </div>
    </div>
  )
}