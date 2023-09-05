import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

const NotesCard = styled(Paper) (({NotesBg, TextColor}) => ({
    background: `${NotesBg}`,
    color: `${TextColor}`,
    height: '275px',
    width: '275px',
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
            <NotesCard NotesBg={theme.block_color} TextColor={theme.text_color} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{ background: `${theme.nav_color}`, height: '40px', width: '75%', fontSize: 'larger', padding: '0 10px', borderRadius: '5px', display: 'flex', alignItems: 'center'}}>
                        <TruncateText text={title} maxLength={24}> </TruncateText>
                    </div>
                    <WysiwygIcon fontSize='medium' style={{ cursor: 'pointer', fontSize: '30px' }}></WysiwygIcon>
                </div>
                <div style={{ height: '210px', padding: '10px 5px', overflow: 'hidden', fontSize: '17px', color: `${theme.desc_color}`}}>
                    <TruncateText  text={desc} maxLength={325}> </TruncateText>
                </div>
            </NotesCard>
        </div>
    )
}

export default Notes