///<reference types="Cypress" />

describe("Add Multiple items", () => {
    before(function(){
        cy.fixture('products').then(function(data){
            globalThis.data=data;
        })

    })
    beforeEach(function () {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
    })
    it("Adding multiple items to basket via custom commands", () => {
       globalThis.data.productName.forEach(function(element){
        cy.addItemToCart(element)
        
       })

    });
   
    
})