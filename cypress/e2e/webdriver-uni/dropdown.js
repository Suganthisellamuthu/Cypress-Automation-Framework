///<reference types="Cypress" />

describe("Validate dropdown",() =>{
  
    it("select the dropdown using value and text",() =>{
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' , 'target').click() //handling multiple tabs
       cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
       cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')







    });
   
})