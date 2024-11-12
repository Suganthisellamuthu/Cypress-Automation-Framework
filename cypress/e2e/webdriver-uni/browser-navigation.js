///<reference types="Cypress" />

describe("Validate Browser navigation commands",() =>{
    //we can apply default timeout for the particular testcase
    Cypress.config('defaultCommandTimeOut',8000)
  
    it.only("Validate back,forward and Reload commands",() =>{
        cy.visit("https://www.webdriveruniversity.com"),{timeout: 10000}
        cy.get('#contact-us').invoke('removeAttr' , 'target').click() //handling multiple tabs
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload()
        cy.go('forward')
        cy.url().should('include','contactus')
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr' , 'target').click()
        cy.url().should('include','To-Do-List')






    });

})