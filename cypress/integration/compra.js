/// <reference types="Cypress" />   

describe('Compra', () => {
     it.only('deve poder finalizar compra', () => {
        cy.visit('https://magento2-demo.magebit.com/');

        const firstName = 'Victória';
        const lastName = 'Duarte';
        const email = 'victoriarduarte9877@hotmail.com';
        const password = 'pwd123#@';

        // Em um ambiente de testes controlado essa pré condição de massa de dados poderia ser criada via API ou inserção no banco de dados
        cy.cadastraUsuario(firstName, lastName, email, password);
        cy.logout();
        
        cy.signin('victoriarduarte9877@hotmail.com', 'pwd123#@');

        // Adiciona produto ao carrinho
        cy.get('#search').type('Radiant');
        cy.get('[title="Search"]').click();
        cy.get('[data-ui-id="page-title-wrapper"]').contains('Radiant');
        cy.contains('a[class="product-item-link"]','Radiant').click();
        cy.get('[data-option-label="M"]').click();
        cy.get('[data-option-label="Blue"]').click();
        cy.get('[title="Add to Cart"]').click();
        cy.get('.counter-number').should('have.text','1');
  
        // Acessa o carrinho
        cy.get('.counter-number',{ timeout: 10000 }).click();
        cy.get('#top-cart-btn-checkout').click();

        cy.get('[name="street[0]"]',{ timeout: 10000 }).type('Rua Lauro Linhares');
        cy.get('[name="country_id"]').select('Brazil').should('have.value','BR');        
        cy.get('[name="region_id"]').select('Santa Catarina').should('have.value','507');        
        cy.get('[name="city"]').type('Florianopolis');
        cy.get('[name="postcode"]').type('88036-003');
        cy.get('[name="telephone"]').type('48999088604');

        cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
        cy.get('.button > span').click();
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span',{ timeout: 20000 }).click();

        cy.get('.base',{ timeout: 10000 }).should('have.text', 'Thank you for your purchase!');
    });
});