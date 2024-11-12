///<reference types="Cypress" />

describe("Iterate through element", () => {
    beforeEach(function () {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    })
    it("Print the name of the makeup items", () => {
        cy.get('.contentpanel > ul > li > div > a').each(($e1, index, $list) => {

            cy.log($e1.text())

        })

    });
    //below code using custom commands it's very useful for using the code again(code reuseable)
    it("Click on the specific product from list", () => {
        // cy.get('.contentpanel > ul > li > div > a').each(($e1, index, $list) => {
        //     if ($e1.text() === "Lips") {

        //         cy.wrap($e1).click()
        //     }

        // })
        cy.selectProduct('Lips')

    });
    
    it("Click on the another specific product from list", () => {
        cy.selectProduct('Eyes')
    })
})