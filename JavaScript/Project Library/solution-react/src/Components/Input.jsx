import React,{ useContext , useRef } from 'react';
import { BookContext } from '../BookContext';
import { Row, Col, Form, Button } from 'react-bootstrap';

function Input() {
    const { bookInfo, setBookInfo, isChecked, setIsChecked } = useContext(BookContext);

    const title = useRef();
    const author = useRef();
    const genre = useRef();
    const year = useRef();
    const pageNumber = useRef();
    
    function Book(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.author = obj.author;
        this.genre = obj.genre;
        this.year = obj.year;
        this.pageNumber = obj.pageNumber;
        this.status = obj.status;
    }

    const handleCheckbox = (e) =>{
        const checked = e.target.checked;
        setIsChecked(checked);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const randomID =  Date.now().toString(36) + Math.random().toString(36).substr(2);
        const bookTitle = title.current.value;
        const bookAuthor = author.current.value;
        const bookGenre = genre.current.value;
        const releaseYear = year.current.value;
        const pages = pageNumber.current.value;
        const status = isChecked;
       
        const book = new Book({id: randomID, title: bookTitle, author: bookAuthor, genre: bookGenre, year: releaseYear, pageNumber: pages, status: status});

        let newBookInfo = [...bookInfo];
        setBookInfo([...newBookInfo,book]);
        console.log('STATE', bookInfo);
        console.log('VAR', newBookInfo)
        
        localStorage.setItem('book', JSON.stringify(bookInfo));

        title.current.value = '';
        author.current.value = '';
        genre.current.value = '';
        year.current.value = '';
        pageNumber.current.value = '';
    }

    return (
      <>
        <Row className="mt-5">
           
            <Col md={12} className="input-form">
            <Form onSubmit={handleSubmit} className="p-3">
                <h1 className="text-center">Add Your Book</h1>
                <hr className="line"/>
                <Form.Group as={Row} controlId="Title">
                    <Form.Label column sm="2">
                        Title
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={title} type="text" placeholder="Book title" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Author">
                    <Form.Label column sm="2">
                        Author
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={author} type="text" placeholder="Author of the book" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="Genre">
                    <Form.Label column sm="2">
                        Genre
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={genre} type="text" placeholder="Genre of the book" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="ReleaseYear">
                    <Form.Label column sm="2">
                        Release Year
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={year} type="text" placeholder="Release year" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="NumberOfPages">
                    <Form.Label column sm="2">
                        Number of Pages
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control ref={pageNumber} type="number" placeholder="Page number" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={handleCheckbox} label="I've read this book" />
                </Form.Group>
                <hr className="line" />
                <div className="text-center">
                <Button type="submit" primary >New Book</Button>
                </div>

            </Form>
        </Col>
        </Row>
        <hr className="line mt-5" />
      </>
    )
}

export default Input
