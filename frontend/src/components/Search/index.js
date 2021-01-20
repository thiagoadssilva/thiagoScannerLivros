import React, { useState, useEffect } from 'react';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import BookNotFound from '../BookNotFound';

import {
    Container,
    ContainerImage,
    ImageBook,
    TitleBook,
    ContainerImageOne,
    TitleAuthor,
    ContainerDescription,
    LinkCompra,
    ContainerJumbotron
} from './styled';

export default () => {

    const [nameBook, setNameBook] = useState('');
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyCtu7ZTNOPAgMNlLrvGzHqCIaH-cU2AiIk');

    let controlComponent;

    //- Função que vai capturar o que estiver sendo digitado no campo.
    function handleChange(event) {
        const book = event.target.value;
        setNameBook(book);
    }

    function handleSearch(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+${nameBook}&key=${apiKey}&maxResults=40`)
            .then(data => {
                setResult(data.data.items);
            }).catch(erros => {
                alert(erros);
            });
    }

    if (result) {
        controlComponent = result.map(book => (
            <ContainerImageOne >
                <LinkCompra href={book.saleInfo.buyLink} target="_blank">
                    <ImageBook src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                    {/* <ContainerDescription>
                        <TitleBook>{book.volumeInfo.title}</TitleBook>
                        <TitleAuthor>{book.volumeInfo.authors}</TitleAuthor>
                    </ContainerDescription> */}
                </LinkCompra>
            </ContainerImageOne>
        ))
    } else {
        controlComponent = <BookNotFound />
    }

    return (
        <Container>
            <ContainerJumbotron>    
                <Jumbotron style={{ paddingTop: "20px", paddingBottom: '20px' }}>
                    <Form onSubmit={handleSearch}>
                        <Form.Group>
                            <Form.Label>Informe o nome do livro para pesquisar:</Form.Label>
                            <Form.Control type="text" onChange={handleChange} value={nameBook} />
                        </Form.Group>
                        <Form.Group>
                            <Button variant="success" type="submit" data-testid="btn-pesquisar">
                                Pesquisar
                        </Button>
                        </Form.Group>
                    </Form>
                </Jumbotron>
            </ContainerJumbotron>
            <ContainerImage>
                {controlComponent}
            </ContainerImage>
        </Container>
    );
}
