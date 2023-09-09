import styled from '@emotion/styled';
import './App.css';
import { useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddNotes from './components/AddNotes';
import AllNotes from './components/AllNotes';
import Edit from './components/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Page = styled('div') (( {backgroundColor} ) => ({
  background : `${backgroundColor}`,
  minHeight: '100vh',
  padding: '1.1vw',
})); 

function App() {

  const {theme} = useAppContext();
  
  return (  
    <BrowserRouter>
      <Page style = {{ backgroundColor : `${theme.bg_color}` }} >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addnotes' element={<AddNotes/>} />
          <Route path='/allnotes' element={<AllNotes/>} />
          <Route path='/edit' element={<Edit/>} />
        </Routes>
      </Page>
      </BrowserRouter>
  );
}

export default App;