/* eslint-disable no-undef */
describe('test for cypress', () => {
  it('does this even work?', () => {
    assert.strictEqual(true, true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/');
  });
});
