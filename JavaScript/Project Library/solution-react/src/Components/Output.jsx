import React,{ useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';

function Output() {
   
    const [display, setDisplay] = useState();
    const handleDisplay = () => {
        const savedItem = JSON.parse(localStorage.getItem('book'));
        savedItem ? setDisplay(true) : setDisplay(false); 
    }

    useEffect(()=>{
        handleDisplay();
    },[])
    
    return (
        <>
        <Row className={`d-${display ? 'block' : 'none' }`}>
            <Col md={12} className="my-5 text-center">
                <h1 className="head">Your Library</h1>
            </Col>
            <BookCard />
        </Row>
        </>
    )
}

export default Output
