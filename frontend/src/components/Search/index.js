import React, { useState, useEffect } from 'react';
import { Form, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import Paginacao from '../Paginacao';

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

    const ITEMS_PAGES = 50;

    const [nameBook, setNameBook] = useState('php');
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState('AIzaSyCtu7ZTNOPAgMNlLrvGzHqCIaH-cU2AiIk');
    const [totalItems, setTotalsItems] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    //- Função que vai capturar o que estiver sendo digitado no campo.
    function handleChange(event) {
        const book = event.target.value;
        setNameBook(book);
    }

    useEffect(() => {
        //- Função que vai fazer a cominicação com api de livros da google
        function handleSearch(event) {
            event.preventDefault();
            //axios.get(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=${apiKey}&maxResults=40`)
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}&key=${apiKey}`)
                .then(data => {
                    setResult(data.data.items);
                    setTotalsItems(data.data.totalItems)
                });
        }

        handleSearch();
    }, [currentPage]);



    function handleChangePage(page) {
        setCurrentPage(page);
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
                        <ImageBook src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                        <ContainerDescription>
                            <TitleBook>{book.volumeInfo.title}</TitleBook>
                            <TitleAuthor>{book.volumeInfo.authors}</TitleAuthor>
                        </ContainerDescription>
                    </ContainerImageOne>
                ))}
            </ContainerImage>

            <Paginacao totalItems={totalItems} itemsPage={ITEMS_PAGES} currentPage={currentPage} changePage={handleChangePage} />
        </Container>
    );
}
