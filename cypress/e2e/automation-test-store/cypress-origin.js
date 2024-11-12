describe("Handling cypress limitations",() =>{
    it.only("Validate two different domains",() =>{

      cy.visit("https://www.webdriveruniversity.com")
      cy.visit("https://visionrcl.org.uk/?")
      cy.origin("https://visionrcl.org.uk/",()=>{
        cy.get("button[aria-label='Reject All']").click({multiple:true})
      
     

      })
      
     
      
    })
    

    
       
  
       
        
       
        
    


        
   
    it("Validate two different domains",() =>{
    
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
        cy.get('a[class="prdocutname"]').contains('Skinsheen Bronzer Stick').click();
        


        
    });
  


});
