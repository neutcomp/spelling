/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check all elements extists', () => {
    cy.get('h1').contains('Welkom bij spelling oefenen');
    cy.get('[data-cy=je-naam]').contains('Je naam');
    cy.get('[data-cy=categorie]').contains('Categorie');
    cy.get('[data-cy=aantal-vragen]').contains('Aantal te oefenen');
    cy.get('h2').contains('Statistieken');
  });

  it('Check validation', () => {
    cy.get('[data-cy=start]').click();
    cy.get('[data-cy=voornaam-validatie]').contains('Geef een naam op alstublief');
    cy.get('[data-cy=voornaam').type('Bjorn');
    cy.get('[data-cy=start]').click();
    cy.get('[data-cy=validation-message]').contains('Je hebt geen categorie geselecteerd');
  });
});
