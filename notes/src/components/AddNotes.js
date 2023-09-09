import styled from '@emotion/styled'
import { Button, Container, InputBase, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import axios from 'axios';


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

const AddNotes = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  async function createNote(){
    try{
      const response = await axios.post('https://localhost:9000/addnotes', {
      title: title,
      desc: desc,
    });

    if (response.status === 200) {
      alert('Successfully Saved');
    } else {
      alert('Failed! Please try again.');
    }
    }
    catch (error) {
      console.error('An error occurred:', error.message);
      alert('Failed! An error occurred. Please try again later.');
    }

  }

  const {theme} = useAppContext();
 
  return (
    <NotesBox blockcolor={theme.block_color} >
        <TitleField placeholder='Title' navcolor={theme.nav_color} textcolor={theme.text_color} onChange={ (e) => setTitle(e.target.value) } />
        <DescriptionField placeholder='Description ...' navcolor={theme.nav_color} textcolor={theme.text_color} style={{ overflow: 'auto'}} onChange={ (e) => setDesc(e.target.value) } />
        <Button onClick={createNote} type="submit" variant="contained" color="primary" style={{ height: '8%', width: 'calc(85px + 3vw)', fontSize: 'calc(12px + 0.6vw)', background: 'darkslategray' }} > Submit </Button>
    </NotesBox>
  )
}

export default AddNotes