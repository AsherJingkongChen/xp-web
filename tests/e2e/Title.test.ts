describe('Title', () => {
  it('contains "XP", case sensitive', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options).title().should('match', /XP/);
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });

  it('contains all parts of the URL', () => {
    const check = (url: string) => {
      const title = cy.visit(url).title();
      let parts = url.split('/').filter(Boolean);
      parts = parts.length ? parts : ['Home'];
      for (const part of parts) {
        title.should('match', new RegExp(part, 'i'));
      }
    };
    check('/');
    check('/guide/');
    check('/info/');
  });

  it('contains keywords', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options)
        .title()
        .should('match', /preview/i)
        .should('match', /file/i);
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });

  /**
   * @link [Token Recommendation](https://mrs.digital/tools/meta-length-checker/)
   */
  it('does not contain brackets and pipes', () => {
    const check = (
      url: string,
      options?: Partial<Cypress.VisitOptions>,
    ) => {
      cy.visit(url, options)
        .title()
        .should('not.match', /(\||\[|\]|\{|\})/d);
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
        .title()
        .should('have.length.at.most', 55);
    };
    check('/');
    check('/guide/');
    check('/info/');
    check('/error/404/', { failOnStatusCode: false });
  });
});
