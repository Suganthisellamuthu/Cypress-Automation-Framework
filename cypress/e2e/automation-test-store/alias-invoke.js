///<reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate the specific Makeup product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='product/category&path=36']").contains('Eyes').click({force:true})
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productText')
        cy.get('@productText').its('length').should('be.gt' ,5)
        cy.get('@productText').should('include','Mascara')
       

       

      });
      it("Validate the productcount and title for cart", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('productCount')
        cy.get('@productCount').should('have.length',16)
        cy.get('@productCount').find('.productcart').invoke('attr','title').should('include','Add to Cart')
       
       

       

      });
      it.only("Validate the productcount and title for cart", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then($itemPriceText =>{
           var itemPrice= $itemPriceText.split('$')
           var NonSaleItemPrice=0;
           var i;
           for(i=0;i<itemPrice.length;i++){
            cy.log(itemPrice[i])
            NonSaleItemPrice += Number(itemPrice[i])
           }
           cy.log("Non sale item price :", + NonSaleItemPrice)
        })
       
       

       

      });
    
})