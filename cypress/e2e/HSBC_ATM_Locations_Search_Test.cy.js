describe('HSBC ATM Locator Test Scenarios', () => {
  it('ATM Search Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    //cy.Click_Function('Find your nearest HSBC branch or ATM ').click({force:true});
    cy.contains('Find your nearest HSBC branch or ATM').click({force: true});
    cy.get('h1').contains('Branches & ATMs');
  })
})

