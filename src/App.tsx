import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { AllNotes, CreateNote, NoteDetails, NoteEdit, Setting } from 'pages'

export const App: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={AllNotes} />
      <Route path='/note/:id' component={NoteDetails} />
      <Route path='/edit/:id' component={NoteEdit} />
      <Route path='/create' component={CreateNote} />
      <Route path='/settings' component={Setting} />
      <Redirect to='/' />
    </Switch>
  )
}