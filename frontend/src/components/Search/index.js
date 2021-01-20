import React, { useState } from 'react';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import BookNotFound from '../BookNotFound';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Container,
    ContainerImage,
    ImageBook,
    TitleBook,
    ContainerImageOne,
    TitleAuthor,
    ContainerDescription,
    LinkCompra,
    ContainerJumbotron,
    TitleName,
    TitleAuthorName
} from './styled';

export default () => {

    const [nameBook, setNameBook] = useState('php');
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
                console.log(data.data.items);
            }).catch(erros => {
                alert(erros);
            });
    }

    if (result) {
        controlComponent = result.map(book => (
            <ContainerImageOne >

                <ImageBook src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />

                <ContainerDescription>
                    <TitleName>
                        Livro:
                    </TitleName>

                    <TitleBook>{book.volumeInfo.title}</TitleBook>

                    <TitleAuthorName>
                        Autor:
                    </TitleAuthorName>
                    <TitleAuthor>
                        {book.volumeInfo.authors && book.volumeInfo.authors}
                        {!book.volumeInfo.authors && "Não Informado"}
                    </TitleAuthor>

                </ContainerDescription>
                <hr />
                {book.saleInfo.buyLink  &&
                    
                    <LinkCompra href={book.saleInfo.buyLink} target="_blank">
                        <Button style={{alignItems: 'center', textAlign: 'center', marginLeft: '20px'}} variant="success">Comprar <FontAwesomeIcon icon={faShoppingCart} /></Button>
                    </LinkCompra>
                }
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
                            <Form.Label style={{ fontWeight: 'bold' }}>Pesquise seu livro:</Form.Label>
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
