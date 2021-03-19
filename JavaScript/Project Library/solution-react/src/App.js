import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BookContext } from './BookContext' 
import Input from './Components/Input';
import Output from './Components/Output';


function App() {
  const [bookInfo, setBookInfo] = useState([]);
  const [isChecked, setIsChecked] = useState();
  const [show, setShow] = useState(false);


  return (
    <>
    <BookContext.Provider value={{bookInfo, setBookInfo, isChecked, setIsChecked, show, setShow}}>
      <Container >
        <Input />
        <Output />
      </Container>
    </BookContext.Provider>
    </>
  );
}

export default App;
