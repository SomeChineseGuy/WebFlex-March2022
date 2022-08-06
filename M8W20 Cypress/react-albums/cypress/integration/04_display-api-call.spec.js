it('can display the results from an API query', () => {
  // Visit the site
  cy.visit('/');

  // tell cypress to get in the way of each ajax request and respond with fake data
  cy.intercept('GET', '**/search*', { fixture: 'itunes' }).as('loadData');

  // get the input field and type "daft punk"
  cy.get('.search__form').find('input').type('Daft Punk');

  // get the spinner and make sure it's visible
  cy.get('.spinner').should('be.visible');

  // wait until the Api results load
  // cy.wait(5000);
  cy.wait('@loadData');

  // pick out one DP album to make sure it's visible
  cy.contains('Discovery').should('be.visible');

  // uncheck the explicit box
  cy.get('#Explicit').uncheck();

  // make sure the explicit album no longer appears
  cy.get('article.album').should('not.contain', 'Daft Club');
});
``````;
