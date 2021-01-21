import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
`;

export const ContainerJumbotron = styled.div`

`;

export const LinkCompra = styled.a`
    flex: 1;
`;


export const ContainerImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const ContainerImageOne = styled.div`
    margin: 15px;
    padding: 15px;
    background-color: #E9E8EB;
    border-radius: 10px;
    
`;

export const ImageBook = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 15px;
`;

export const TitleBook = styled.label`
    width: 150px;
    word-wrap: break-word;
    font-size: 11px;
    margin-bottom: 2px;
    font-weight: 900;
    padding-left: 5px;
`;

export const TitleAuthor = styled.label`
    width: 150px;
    font-size: 11px;
    font-weight: 900;
    padding: 5px;
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 5px;
`;

export const ContainerDescription = styled.div`
    width: 170px;
    word-wrap: break-word;
    height: 150px;;
    margin-top: 5px;
    background-color: #CCC;
    border-radius: 5px;
    margin-top: 10px;

`;

export const TitleName = styled.label`
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
`;
export const TitleAuthorName = styled.label`
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
`;

export const InfoNotBuy = styled.label`
    font-weight: bold;
    color: red;
    margin-left: 35px;
    margin-top: 5px;
`;

export const Teste = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    height: 160px;
    width: 160px;
`;