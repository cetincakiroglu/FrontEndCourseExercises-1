import React,{ useContext , useEffect } from 'react'
import { BookContext } from '../BookContext'
import { Row, Col, Card, Button } from 'react-bootstrap';

function BookCard() {
    const { bookInfo, setBookInfo, isChecked, setIsChecked } = useContext(BookContext);
    const getSavedItems = () => {
        let books = JSON.parse(localStorage.getItem('book'));
        if(books !== null){
            setBookInfo(books);
        } else{
            return;
        }
    }
    const deleteBook = (num) => {
        bookInfo.splice(num,1);
        setBookInfo([...bookInfo]);
        localStorage.setItem('book', JSON.stringify(bookInfo));
    }
   
    const changeReadStatus = (num) => {
        let item = bookInfo[num];
        if(isChecked === false){
            setIsChecked(true);
            item.status = isChecked;
        }else{
            setIsChecked(false);
            item.status = isChecked;
        }

        //update local storage after book status change
        let storedBooks = [...bookInfo];
        storedBooks = storedBooks.map(book => book.id === item.id ? book = item : book);
        localStorage.setItem('book',JSON.stringify(storedBooks));
    }

    useEffect(()=>{
        getSavedItems();
    },[])
    
    return (
        <>
        <Row className=" my-5">
            {bookInfo ? bookInfo.map((item,index) => (
            <Col className="mt-4">
            <Card style={{width:'18rem'}}>
                <Card.Body>
                    <span>#{index +1}</span>
                    <Card.Title>Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.title}</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        Author: <span>{item.author}</span>
                    </Card.Text>
                    <Card.Text>
                        Genre: <span>{item.genre}</span>
                    </Card.Text>
                    <Card.Text>
                       Release Year: <span>{item.year}</span>
                    </Card.Text>
                    <Card.Text>
                       Number of Pages: <span>{item.pageNumber}</span>
                    </Card.Text>
                    <Card.Text>
                       Read status: <span>{item.status ? 'Read' : 'Unread'}</span>
                      
                    </Card.Text>
                    <hr/>
                </Card.Body>
                <div className="d-flex justify-content-around py-2">
                <Button type="submit" variant='primary' onClick={() => changeReadStatus(index)}>Change Read Status</Button>
                <Button type="submit" variant='danger' onClick={() => deleteBook(index)}>Delete Book</Button>
                </div>
            </Card>
            </Col>
       )) : ''}
        </Row>
        </>
   
    )
}

export default BookCard
