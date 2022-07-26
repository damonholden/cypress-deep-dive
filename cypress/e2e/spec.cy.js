describe('website', () => {
  it('should load', () => {
    cy.visit('http://localhost:3000/');
  });
});

describe('true', () => {
  it('should equal true', () => {
    expect(true).to.equal(true);
  });
  it('should equal false', () => {
    expect(true).to.equal(false);
  });
});
