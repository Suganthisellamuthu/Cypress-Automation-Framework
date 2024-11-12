///<reference types="Cypress" />

describe("Inspect the product in automation teststore",() =>{
    it("Click on the first item using text",() =>{
        cy.visit("https://automationteststore.com/")
        cy.get('a[class="prdocutname"]').contains('Skinsheen Bronzer Stick').click();
        
    


        
    });
    it("Click on the first item using index",() =>{
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    


        
    });


})
