// Write your code here

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Main,
  Heading,
  Form,
  TitleInput,
  NotesInput,
  ButtonContainer,
  Button,
  NotesList,
  EmptyNotes,
  Image,
  EmptyNotesTitle,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')

  const [notes, setNotes] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()

    if (title !== '' && notes !== '') {
      const newNotes = {
        id: uuidv4(),
        title,
        notes,
      }

      setNotesList(prevNotesList => [...prevNotesList, newNotes])

      setTitle('')

      setNotes('')
    }
  }

  return (
    <Main>
      <Heading> Notes </Heading>
      <Form onSubmit={onAddNotes}>
        <TitleInput
          type="text"
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <NotesInput
          type="text"
          placeholder="Take a Note..."
          onChange={onChangeNotes}
          value={notes}
        />
        <ButtonContainer>
          <Button type="submit"> Add </Button>
        </ButtonContainer>
      </Form>
      {notesList.length === 0 ? (
        <EmptyNotes>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesTitle> No Notes Yet </EmptyNotesTitle>
          <EmptyNotesDescription>
            Notes you add will appear here
          </EmptyNotesDescription>
        </EmptyNotes>
      ) : (
        <NotesList>
          {notesList.map(eachNotes => (
            <NoteItem key={eachNotes.id} notesData={eachNotes} />
          ))}
        </NotesList>
      )}
    </Main>
  )
}

export default Notes
