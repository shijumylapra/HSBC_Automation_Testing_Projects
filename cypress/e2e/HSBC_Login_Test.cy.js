describe('HSBC Login Test Scenarious', () => {
    it('Login Test', () => {

        cy.visit('https://www.hsbc.co.in/')
        //Validate HSBC Bank Log
        cy.get('div.header-logo>h1').click();
        //Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving  and Deposit
         cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
         //Click on Login button
        cy.contains('Log On').click({force:true});
        //Validate Log On header in Login page
        cy.get('h2').contains('Manage your money more easily') 
        //Check Continue button is available
        cy.contains('Continue to log on with browser').click({force: true});
        //Also validate initially Continue button is disabled.
        cy.get('button[id="username_submit_btn"]').should('be.disabled');
        //Type any random email in the username field
        cy.get("input[name=name]").type('shiju@gmail.com{enter}')
        cy.wait(1000);
        //Now check Continue button is Enabled
        cy.get('button[id="username_submit_btn"]').should('be.enabled');
        //Click on continue button
        cy.get('button[id="username_submit_btn"]').click();
      
        //Click on the tooltip
        cy.contains('View help for username').click({force: true});
        //Now validate the username header in the new pop-up screen
        cy.get('div[id="applicationTitle"]').should('be.visible');

        //Click on the close button present in the new pop-up screen
        cy.get('input#Close_dob_exception').click({force: true});
        cy.get('div.header-logo>a>img').click();
        cy.screenshot();

  })
})

        
    