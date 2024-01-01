describe('/robots.txt', () => {
  it('returns status code 200', () => {
    cy.request('/robots.txt').then((res) =>
      expect(res.status).eq(200),
    );
  });
});

describe('/sitemap.xml', () => {
  it('returns status code 200', () => {
    cy.request('/sitemap.xml').then((res) =>
      expect(res.status).eq(200),
    );
  });
});
