/// <reference types="cypress" />

describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('toggles third todo item', () => {
    // 클릭
    cy.get(':nth-child(3) > [data-cy=circle]').click();
    cy.get(':nth-child(3) > [data-cy=circle] > [data-cy=check-icon]').should(
      'exist'
    );

    cy.get(':nth-child(3) > [data-cy=circle]').click();
    cy.get(':nth-child(3) > [data-cy=circle] > [data-cy=check-icon]').should(
      'not.exist'
    );
  });

  it('removes first todo item', () => {
    cy.get(':nth-child(1) > [data-cy=remove]').click({ force: true });
    cy.get('[data-cy=list]')
      .children()
      .should('have.length', 3);
  });

  it('creates new todo item', () => {
    cy.get('[data-cy=create]').click();
    cy.get('[data-cy=todo-input]').type('Hello, World{enter}');
    cy.get('[data-cy=list] > :nth-child(5)').should('exist');
  });

  it('opens and closes todo form', () => {
    cy.get('[data-cy=create]').click();
    cy.get('[data-cy=todo-input]').should('exist');
    cy.get('[data-cy=create]').click();
    cy.get('[data-cy=todo-input]').should('not.exist');
  });
});
