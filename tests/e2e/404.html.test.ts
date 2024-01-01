describe('/404.html', () => {
  it('returns status code 200', () => {
    cy.request('/404.html').then((res) =>
      expect(res.status).eq(200),
    );
  });

  it('contains "Not Found" in the title, description and heading', () => {
    cy.visit('/404.html')
      .get('h1')
      .should('contain.text', 'Not Found')
      .get('title')
      .should('contain.text', 'Not Found')
      .get('meta[name=description]')
      .should('have.attr', 'content')
      .should('contain', 'Not Found');
  });

  it('contains robots meta tag that contains "noindex"', () => {
    cy.visit('/404.html')
      .get('meta[name=robots]')
      .should('have.attr', 'content')
      .should('contain', 'noindex');
  });
});
