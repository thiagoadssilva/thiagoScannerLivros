import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import {
    Container
} from './styled';

export default (props) => {
    console.log(props.totalItems);
    console.log(props.itemsPage);
    console.log(props.currentPage);
    console.log(props.changePage);

    function generateFirstItem() {
        return (
            <Pagination.First key="pagFirst" onClick={() => props.changePage(1)} disabled={props.currentPage === 1} />
        );
    }

    function generatePreviousItem() {
        return (
            <Pagination.Prev key="pagPrev" onClick={() => props.changePage(props.currentPage - 1)} disabled={props.currentPage === 1} />
        );
    }

    function generateNumberItem(page) {
        return (
            <Pagination.Item key={page} active={page === props.currentPage} onClick={() => props.changePage(page)}>
                {page}
            </Pagination.Item>
        );
    }

    function generateNextItem(numberPage) {
        return (
            <Pagination.Next key="pagNext" onClick={() => props.changePage(props.currentPage + 1)} disabled={props.currentPage === numberPage} />
        );
    }

    function generateLastItem(numberPage) {
        return (
            <Pagination.Last key="pagLast" onClick={() => props.changePage(numberPage)} disabled={props.currentPage === numberPage} />
        );
    }

    function getPage() {
        const numberPages = Math.ceil(props.totalItems / props.itemsPage);
        let items = [];

        items.push(generateFirstItem());
        items.push(generatePreviousItem());

        for (let page = 1; page <= numberPages; page++) {
            items.push(generateNumberItem(page));
        }

        items.push(generateNextItem(numberPages));
        items.push(generateLastItem(numberPages));

        return items;

    }

    return (
        <Container>
            <Pagination>
                {getPage()}
            </Pagination>
        </Container>
    );
}