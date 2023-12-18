describe('Meta Description', () => {
  it('contains "XP", case sensitive', () => {
    const check = (url: string) => {
      cy.visit(url)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .should('match', /XP/);
    };
    check('/');
    check('/guide');
    check('/info');
    check('/fallbacks/page-not-found');
  });

  it('contains all parts of the URL', () => {
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
    check('/guide');
    check('/info');
  });

  it('contains keywords', () => {
    const check = (url: string) => {
      cy.visit(url)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .should('match', /preview/i)
        .should('match', /file/i);
    };
    check('/');
    check('/guide');
    check('/info');
    check('/fallbacks/page-not-found');
  });

  /**
   * @link [Length Recommendation](https://mrs.digital/tools/meta-length-checker/)
   */
  it('has a suitable length', () => {
    const check = (url: string) =>
      cy
        .visit(url)
        .get('meta[name=description]')
        .should('have.attr', 'content')
        .and('have.length.within', 120, 158);
    check('/');
    check('/guide');
    check('/info');
    check('/fallbacks/page-not-found');
  });
});
