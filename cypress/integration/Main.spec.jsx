/// <reference types="cypress" />

/* Teste End to End ou E2E são testes de ponta a ponta */
/* Aqui eu definir alguns testes mas seria bom testar a requisição da api */
/* https://docs.cypress.io/ documentação tem explicado como testar tudo */
/* Last Edited: 02:50 AM */

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
