describe('HSBC Login Test Scenarious', () => {
    it('Login Test', () => {

        cy.visit('https://www.hsbc.co.in/')
        //Validate HSBC Bank Log
        cy.get('div.header-logo>h1').click();
        //Validate Home Page Title = HSBC India - Credit Cards, NRI Services, Saving  and Deposit
         cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
        
    })
})
    