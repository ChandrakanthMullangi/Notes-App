// Style your elements here

import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 50px;
`

export const TitleInput = styled.input`
  font-family: Roboto;
  padding: 8px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  font-weight: bold;
`

export const NotesInput = styled.textarea`
  font-family: Roboto;
  padding: 8px;
  height: 100px;
  margin-bottom: 15px;
  outline: none;
  border: none;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  font-family: Roboto;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`

export const NotesList = styled.ul`
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 25px;
  width: 80%;
`

export const EmptyNotes = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 100px;
  width: auto;
`

export const EmptyNotesTitle = styled.h1`
  font-family: Roboto;
  margin-bottom: 0px;
  color: #334155;
  font-size: 18px;
`

export const EmptyNotesDescription = styled.p`
  font-family: Roboto;
  color: #475569;
`
