///<reference types="Cypress" />

describe("Validate autosuggestive dropdown", () => {

    it("select the autosuggestive dropdown", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click() //handling multiple tabs
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list div').each(($e1, index, $list) => {

            if ($e1.text().includes('vacado')) {
                cy.wrap($e1).click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Avacado')
            }


        }).then(()=>{

            cy.get('#myInput').type('g')
        cy.get('#myInputautocomplete-list div').each(($e1, index, $list) => {

            if ($e1.text().includes('rapes')) {
                cy.wrap($e1).click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Grapes')
            }

        })
    })







    });

})