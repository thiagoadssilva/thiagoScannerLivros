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
    
`;

export const ImageBook = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 15px;
    
`;

export const TitleBook = styled.label`
    width: 160%;
    word-wrap: break-word;
    font-size: 12px;
    padding: 5px;
    margin-bottom: 2px;
    font-weight: 800;
`;

export const TitleAuthor = styled.label`
    width: 160px;
    font-size: 12px;
    font-weight: 800;
    padding: 5px;
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const ContainerDescription = styled.div`
    width: 100px;
    word-wrap: break-word;
    height: 130px;;
    margin-top: 5px;
`;

export const TitleName = styled.label`
    margin-bottom: 0px;
    font-size: 12px;
`;
export const TitleAuthorName = styled.label`
    margin-bottom: 0px;
    font-size: 12px;
`;