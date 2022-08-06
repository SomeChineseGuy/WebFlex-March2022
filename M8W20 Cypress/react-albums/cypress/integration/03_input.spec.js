describe('tests for the input', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form').find('input').as('inputField');
  });

  it('can type into field', () => {
    cy.get('@inputField')
      .type('Blink 182', { delay: 200 })
      .should('have.value', 'Blink 182');
  });

  it('can handle Backspace', () => {
    cy.get('@inputField')
      .type('SS{backspace}ummm{backspace}{backspace} 41', {delay: 1000})
      .should('have.value', "Sum 41")
  });
});
