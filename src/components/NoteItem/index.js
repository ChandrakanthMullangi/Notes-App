// Write your code here

import {ListItem, ListItemTitle, ListItemNotes} from './styledComponents'

const NoteItem = props => {
  const {notesData} = props

  const {title, notes} = notesData

  return (
    <ListItem>
      <ListItemTitle> {title} </ListItemTitle>
      <ListItemNotes> {notes} </ListItemNotes>
    </ListItem>
  )
}

export default NoteItem
