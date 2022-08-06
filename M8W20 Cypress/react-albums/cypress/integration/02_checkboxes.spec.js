describe('test for checkboxes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8765/');
  });

  it('can uncheck explict box', () => {
    // cy.visit('http://localhost:8765/');

    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can check a checkbox by clicking the label', () => {
    // cy.visit('http://localhost:8765/');
    cy.contains('EP').click();

    cy.get('#EP').should('be.checked');
  });
});
