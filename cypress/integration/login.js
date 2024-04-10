/// <reference types="Cypress" />   

describe('Login', () => {
    it('deve poder realizar o login do usuário', () => {
        cy.visit('https://magento2-demo.magebit.com/');

        // Criação da pré condição para tornar os testes independentes
        const firstName = 'Victória';
        const lastName = 'Duarte';
        const email = 'victoriarduarte9876@hotmail.com';
        const password = 'pwd123#@';

        // Em um ambiente de testes controlado essa pré condição de massa de dados poderia ser criada via API ou inserção no banco de dados
        cy.cadastraUsuario(firstName, lastName, email, password);
        cy.logout();

        cy.signin(email, password);
    });
});