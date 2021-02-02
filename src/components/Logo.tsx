import { FC } from 'react'
import { Link } from 'react-router-dom'

import 'styles/components/logo.sass'

export const Logo: FC = () => <Link to='/' className='logo'>iNotes</Link>
