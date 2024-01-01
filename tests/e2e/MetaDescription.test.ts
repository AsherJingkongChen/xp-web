describe('Meta Description', () => {
  it('contains "XP"', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .should('contain', 'XP');
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });

  it('matches all parts of the URL', () => {
    const check = (url: string) => {
      const description = cy
        .visit(url)
        .get('meta[name=description]')
        .should('have.attr', 'content');
      let parts = url.split('/').filter(Boolean);
      parts = parts.length ? parts : ['Home'];
      for (const part of parts) {
        description.should('match', new RegExp(part, 'i'));
      }
    };
    check('/');
    check('/guide/');
    check('/info/');
  });

  it('matches critical keywords', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .should('match', /preview/i)
        .should('match', /file/i);
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });

  /**
   * @link [Length Recommendation](https://mrs.digital/tools/meta-length-checker/)
   */
  it('has a suitable length', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .and('have.length.within', 120, 158);
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });
});
