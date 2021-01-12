import React, { useState } from 'react';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import Modal from '../Modal';

import {
    Container,
    ContainerImage,
    ImageBook,
    TitleBook,
    ContainerImageOne,
    TitleAuthor,
    ContainerDescription
} from './styled';

export default () => {

    const [nameBook, setNameBook] = useState('php');
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyCtu7ZTNOPAgMNlLrvGzHqCIaH-cU2AiIk');
    const [openModal, setOpenModal] = useState(false);
    const [bookIdDetails, setBookIdDetails] = useState('');

    //- Função que vai capturar o que estiver sendo digitado no campo.
    function handleChange(event) {
        const book = event.target.value;
        setNameBook(book);
    }
    //- Função que vai fazer a cominicação com api de livros da google
    function handleSearch(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=${apiKey}&maxResults=40`)
            .then(data => {
                setResult(data.data.items);
                console.log(data.data.items);
            });
    }

    function openModalDetails() {
        setOpenModal(true);
    }

    return (
        <Container>

            <Jumbotron>
                <Form onSubmit={handleSearch}>
                    <Form.Group>
                        <Form.Label>Informe o livro para pesquisa:</Form.Label>
                        <Form.Control type="text" onChange={handleChange} value={nameBook} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="success" type="submit" data-testid="btn-pesquisar">
                            Pesquisar
                        </Button>
                    </Form.Group>
                </Form>
            </Jumbotron>

            <ContainerImage>

                {result.map(book => (
                    <ContainerImageOne >
                        <ImageBook onClick={openModalDetails} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                       
                    </ContainerImageOne>
                ))}
                
            </ContainerImage>
            <Modal openModal={openModal} />


        </Container>
    );
}

{/* <ContainerDescription>
                            Descrição:
                            <TitleBook>{book.volumeInfo.title}</TitleBook>
                            Autor:
                            <TitleAuthor>{book.volumeInfo.authors}</TitleAuthor>
                        </ContainerDescription> */}