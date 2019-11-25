describe('App initialization', () => {
  it('Loads main page', () => {
    cy.visit('http://localhost:8080/');

    const inputText = 'Movie name';

    cy.get('.search-panel-input')
      .type(inputText)
      .should('have.value', inputText);

    cy.get('.search-panel-button')
      .click()
      .should('have.disabled', true)
  });
});
