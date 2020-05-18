/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('/oefenen.html')
    })

    it('Check that you are redirected to homepage', () => {
        cy.url().contains('index.html');
        cy.get('h1').contains('Welkom bij spelling oefenen');
    });
});
