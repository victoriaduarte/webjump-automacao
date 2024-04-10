// Comandos customizados para serem reutilizados em todo o projeto

Cypress.Commands.add('cadastraUsuario', (firstname, lastname, email, password) => {
    cy.contains('Create an Account').click();

    cy.get('#firstname').type(firstname);
    cy.get('#lastname').type(lastname);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);

    cy.contains('button','Create an Account').click();

    cy.get('.page-header .logged-in').should('have.text',`Welcome, ${firstname} ${lastname}!`)
    cy.get('[data-ui-id="page-title-wrapper"]').should('have.text','My Account')
})

Cypress.Commands.add('signin', (email, password) => {
    cy.get('.panel > .header > .authorization-link > a').click();

    cy.get('#email').type(email);
    cy.get('#pass').type(password);

    cy.contains('button','Sign In').click();

    cy.get('.page-header .logged-in').should('contain.text','Welcome');
})

Cypress.Commands.add('logout', () => {
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
})

