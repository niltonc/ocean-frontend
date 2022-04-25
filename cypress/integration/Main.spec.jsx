/// <reference types="cypress" />

context('Main', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });


  it('Rota Agenda', () => {
    cy.visit('agenda');
    cy.wait(2000);
  })

  it('Rotas Trilhas', () => {
    cy.visit('trilhas');
    cy.wait(2000);
  })

  it('Função do Acordeão', () => {
    cy.get('#accordion').click()
    cy.wait(2000);
  })

  cy

  it('Funcão de Ver Mais', () => {
    cy.get('#ShowGrid').click()
    cy.wait(2000);
  })
});
