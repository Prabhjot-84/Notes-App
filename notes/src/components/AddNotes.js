import styled from '@emotion/styled'
import { Container, InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/AppContext'


const NotesBox = styled(Container) (({BlockColor}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '40px',
    width: '90vw',
    height: '75vh',
    padding: '20px',
    borderRadius: '10px',
    background: `${BlockColor}`,
}))

const TitleField = styled(InputBase) (({NavColor, TextColor}) => ({
  background: `${NavColor}`,
  fontFamily: 'monospace',
  padding: '20px',
  height: '7vh',
  width: '90%',
  fontSize: '20px',
  borderRadius: '7px',
  color: `${TextColor}`
}))

const DescriptionField = styled(TextareaAutosize) (({NavColor, TextColor}) => ({
  background: `${NavColor}`,
  color: `${TextColor}`,
  padding: '20px',
  // height: '42vh',
  minHeight: '42vh',
  maxHeight: '42vh',
  width: '86%',
  fontSize: '20px',
  border: 'none',
  outline: 'none',
  borderRadius: '7px',
  lineHeight: '25px',
  overflowY: 'auto',
}))

const AddNotes = () => {

  const {theme} = useAppContext();

  return (
    <NotesBox BlockColor={theme.block_color} FocusText={theme.bg_color} >
      <TitleField placeholder='Title' NavColor={theme.nav_color} TextColor={theme.text_color} />
      <DescriptionField placeholder='Description ...' NavColor={theme.nav_color} TextColor={theme.text_color} style={{ overflow: 'auto'}} />
    </NotesBox>
  )
}

export default AddNotes