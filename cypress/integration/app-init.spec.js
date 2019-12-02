describe('App initialization', () => {

  beforeEach(function () {
    cy.visit('http://localhost:8080/');
  })

  it('Loads main page and type text in input', () => {
    const inputText = 'Movie name';

    cy.get('.search-panel-input')
      .type(inputText)
      .should('have.value', inputText);
  });

  it('Loads main page and click on search button', () => {
      cy.get('.search-panel-button')
        .click()
        .should('have.disabled', true)
    });
});
