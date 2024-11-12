///<reference types="Cypress" />

describe("Validate checkbox",() =>{
    beforeEach(() => {
       cy.navigateToWebdriveruni_checkboxPage();
      })
  
    it("Uncheck the checkbox",() =>{
         
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')







    });
    it("check the multiple check",() =>{
       
        cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]).should('be.checked')







    });

})