describe('landing page', () => {
  it('should load when visited', () => {
    cy.visit('http://localhost:3000/');
  });

  it('should display h1', () => {
    cy.contains('Cypress Deep Dive');
  });
});

describe('hello-message button', () => {
  it('should be visible', () => {
    cy.contains('show hello message');
  });

  it('should be clickable', () => {
    cy.contains('show hello message').click();
  });

  it('should then display the hello message', () => {
    cy.contains('hello user');
  });
});

describe('alert button', () => {
  it('should be visible', () => {
    cy.contains('alert user');
  });

  it('should be clickable', () => {
    cy.contains('alert user').click();
  });
});

describe('true', () => {
  it('should equal true', () => {
    expect(true).to.equal(true);
  });

  // it('should equal false', () => {
  //   expect(true).to.equal(false);
  // });
});
