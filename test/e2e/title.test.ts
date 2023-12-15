describe('Title', () => {
  it('starts with "XP"', () => {
    cy.visit('/');
    cy.title().should('match', /^XP/);
  });
});
