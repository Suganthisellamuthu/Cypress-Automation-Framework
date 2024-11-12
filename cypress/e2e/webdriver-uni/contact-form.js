///<reference types="Cypress" />



describe("Test Contact us form via webdriveruni",() =>{
    before(function(){
        cy.fixture('example').then(function(data){
           // this.data=data;
           globalThis.data=data;

        })
    })
    it("Should be able to submit successful submission form",() =>{
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and('eq','UTF-8')
        //cy.get('#contact-us').click({force: true})
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("contact us form completed")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text','Thank You for your Message!')
        cy.webDriverUni_ContactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,'contact us form completed','h1','Thank You for your Message!')


        
    });
    it("Should not be able to submit successful submission form",() =>{
        cy.visit(Cypress.env("webdriver_uniUrl") + "/Contact-Us/contactus.html")
        //cy.get('#contact-us').invoke('removeAttr' , 'target').click() //handling multiple tabs

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name) 
        // cy.get('[type="submit"]').click()
        cy.webDriverUni_ContactForm_Submission(data.first_name,data.last_name," "," ",'body','Error: Invalid email address')


    });

})
