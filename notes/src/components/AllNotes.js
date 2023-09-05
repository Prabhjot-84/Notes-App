import React from 'react'
import Notes from './Notes'
import styled from '@emotion/styled'

const MainBg = styled('div')`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1vh auto;
`;

const AllNotes = () => {
  return (
    <MainBg>
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      
    </MainBg>
  )
}

export default AllNotes 