import styled from '@emotion/styled'
import { Button, Container, InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/AppContext'


const NotesBox = styled(Container) (({blockcolor}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'column',
    margin: 'auto', 
    marginTop: '40px',
    width: '90vw',
    height: '75vh',
    padding: '20px',
    borderRadius: '10px',
    background: `${blockcolor}`,
}))

const TitleField = styled(InputBase) (({navcolor, textcolor}) => ({
  background: `${navcolor}`,
  fontFamily: 'monospace',
  padding: '10px 20px',
  // height: 'calc(40px + 1.5vw)',
  height: '10%',
  width: '100%',
  fontSize: 'calc(11px + 0.6vw)',
  borderRadius: '7px',
  color: `${textcolor}`
}))

const DescriptionField = styled(TextareaAutosize) (({navcolor, textcolor}) => ({
  background: `${navcolor}`,
  color: `${textcolor}`,
  padding: '20px',
  minHeight: '74%',
  maxHeight: '74%',
  width: '100%',
  fontSize: 'calc(10px + 0.6vw)',
  border: 'none',
  outline: 'none',
  borderRadius: '7px',
  lineHeight: '25px',
  overflowY: 'auto',
}))

const Edit = () => {

  // async function CreateNote(){

  // }

  const {theme} = useAppContext();

  return (
    <NotesBox blockcolor={theme.block_color} >
        <TitleField placeholder='Title' navcolor={theme.nav_color} textcolor={theme.text_color} />
        <DescriptionField placeholder='Description ...' navcolor={theme.nav_color} textcolor={theme.text_color} style={{ overflow: 'auto'}} />
        <Button type="submit" variant="contained" color="primary" style={{ height: '8%', width: 'calc(85px + 3vw)', fontSize: 'calc(12px + 0.6vw)', background: 'darkslategray' }} > Update </Button>
    </NotesBox>
  )
}

export default Edit