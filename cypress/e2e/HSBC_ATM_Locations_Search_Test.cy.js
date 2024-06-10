describe('HSBC ATM Locator Test Scenarios', () => {
  it('ATM Search Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    
    //cy.Click_Function('Find your nearest HSBC branch or ATM ').click({force:true});
    cy.contains('Find your nearest HSBC branch or ATM').click({force: true});
    cy.get('h1').contains('Branches & ATMs');
   // cy.get('input#content_main_button_1').type('Branch & ATM Locator').type('{enter}');

    //Click on Find your nearest branch or ATM link in footer section
    cy.contains('Branch & ATM Locator').click({force:true});
    cy.wait(10000);
    //In drop-down option click option India
    cy.get('input#searchInput').type('India').type('{enter}');
    cy.contains('Rajbhavan Road, Somajiguda , Hyderabad, India, 500082').should('be.visible');
    cy.contains('Show more results').click();
    cy.contains('Amar Avinash Corporate City, Bund Garden Road, Pune, India, 411001').should('be.visible');

    
   // Check Instagram in social media option in footer section
    cy.get('a.social-icon-instagram').should('be.visible');
    //Check Facebook in social media option in footer section
    cy.get('a.social-icon-facebook').should('be.visible');
    //Check Twitter in social media option in footer section
    cy.get('a.social-icon-twitter').should('be.visible');
    //Check Youtube in social media option in footer section
    cy.get('a.social-icon-youtube').should('be.visible');


    //Click on HSBC Logo
    cy.get('div.header-logo>a>img').click();
    //Validate page is navigating to home page by its title
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    //Check and Click on Privacy lin
    cy.contains('Privacy Statement').click({force: true});
    //Validate Privacy Statement as Header
    cy.get('h1').contains('Privacy Statement');

    //Saving Screenshots
    cy.screenshot();


  })
})

