Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Credit Card Testing Scenarios', () => {
    it('Credit Card Test', () => {
      cy.visit('https://www.hsbc.co.in/')
     //Click on Credit Cards link
      cy.contains('Cards & Accounts').click({force: true});
      //Validate Credit Card as a header text
      cy.contains('View all cards').click({force:true});
      // Validate Credit Card as a header text
      cy.get('h1').contains('Credit cards');
      //Validate second credit Card header text is HSBC Cashback Credit Card
      cy.get('h3').contains('HSBC Cashback Credit Card').should('exist');
       //Click on the HSBC cashback Credit card
       cy.get('h3').contains('HSBC Cashback Credit Card').click({force:true});
      //Validate there is Apply now button
      cy.get('a.A-BTNPINSEC-RW-ALL').should('exist');
     //Validate the URL contains credit-cards/products/visa-cashback/
     cy.url('credit-cards/products/visa-cashback');
     //Validate the HSBC credit card image is displayed
     cy.get('img#pp_intro_image_3').should('be.visible');
    //Validate the joining fee mentioned as INR999
    cy.get('p').contains('INR999');
    //Validate the text mentioned as INR999 (waived if you spend more than INR200,000 per year) 
    cy.get('p').contains('waived if you spend more than INR200,000');
    //Validate the Chat image is displayed in the bottom 
    cy.get('img.LPMimage').should('exist');
    //Click on HSBC Logo
    cy.wait(1000);
    cy.get('div.header-logo>a>img').click();
      //Validate page is navigating to home page by its title
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.screenshot();

    })
  }) 
       
  ;
  
  
   
  
  
  