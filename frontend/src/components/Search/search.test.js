import React from 'react';
import ReactDOM from 'react-dom';
import Search from './index';

describe('Test do componente Search', () =>{
    it('Deve renderizar o componente sem erros', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

