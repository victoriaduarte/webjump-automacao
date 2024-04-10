/// <reference types="Cypress" />   

describe('Cadastro', () => {
    it('deve poder realizar o cadastro do usuário', () => {
        cy.visit('https://magento2-demo.magebit.com/');

        cy.cadastraUsuario('Victória', 'Duarte', 'victoriarduarte9875@hotmail.com', 'pwd123#@')
    });
});