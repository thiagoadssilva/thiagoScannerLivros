import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const ContainerImage = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ContainerImageOne = styled.div`
    display: flex;
    display:block;
    border: 1px solid #FFF;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #EEE;
    transition: all ease .2s;
    cursor: pointer;

    &:hover{
        background-color: #E9ECEF;
    }
    
`;

export const ImageBook = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`;

export const TitleBook = styled.label`
    font-size: 10px;
    font-weight: bold;
`;

export const TitleAuthor = styled.label`
    font-size: 10px;
    font-weight: bold;
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

