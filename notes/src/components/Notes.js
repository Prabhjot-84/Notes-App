import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { NavLink } from 'react-router-dom';

const NotesCard = styled(Paper) (({notesbg, textcolor}) => ({
    background: `${notesbg}`,
    color: `${textcolor}`,
    height: 'calc(200px + 5vw)',
    width: 'calc(178.5px + 6.5vw)',
    margin: '20px 10px 0 10px', 
    borderRadius: '8px',
    padding: '15px',
}))

const Notes = () => {

    const {theme} = useAppContext();
    const title = "Our First Note Title is here. ";
    const desc = "Amidst rolling hills and endless meadows, a serene landscape stretches as far as the eye can see. Nature's palette paints the world in vibrant hues. Trees sway gently in the breeze, their leaves whispering secrets to the wind. Birds take flight, creating graceful arcs across the boundless sky. Rivers meander, carving pathways through the earth's embrace. In this tranquil expanse, time slows, and the soul finds solace in the simplicity of nature's symphony."
    
    function TruncateText({ text, maxLength }) {
        if (text.length <= maxLength) {
          return <span>{text}</span>;
        } else {
          const truncatedText = text.slice(0, maxLength) + ' ...';
          return <span>{truncatedText}</span>;
        }
    }

    return (
        <div>
            <NotesCard notesbg={theme.block_color} textcolor={theme.text_color} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{ background: `${theme.nav_color}`, height: '40px', width: '80%', padding: '0 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', fontSize: 'calc(10px + 0.5vw)'}}>
                        <TruncateText text={title} maxLength={20}> </TruncateText>
                    </div> 
                    <NavLink to="/edit" style={{ textDecoration: 'none' }}>
                        <WysiwygIcon style={{ cursor: 'pointer', fontSize: '30px', color: `${theme.text_color}` }} fontSize="medium" />
                    </NavLink>
                </div>
                <div className='notesDesc' style={{ height: '84%', padding: '10px 5px', overflow: 'hidden', overflowY: 'scroll', fontSize: 'calc(10px + 0.4vw)', color: `${theme.desc_color}`}}>
                    {desc}
                </div>
            </NotesCard>
        </div>
    )
}

export default Notes