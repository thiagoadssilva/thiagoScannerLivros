import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

describe('Teste do componente APP', () =>{
    it('Deve Renderizar o componente sem erros', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});