import ContactUsPage from "../../support/pageObjects/webdriver_uni/ContactUsPage";
import HomePage from "../../support/pageObjects/webdriver_uni/HomePage";
///<reference types="Cypress" />



describe("Test Contact us form via webdriveruni",() =>{
    const homepage=new HomePage();
    const contactUsPage=new ContactUsPage();
    before(function(){
        cy.fixture('example').then(function(data){
           // this.data=data;
           globalThis.data=data;

        })
    })

    beforeEach(function(){
         homepage.visitHomePage();
         homepage.clickContactUs_Form();
    })

    it("Should be able to submit successful submission form",() =>{
        cy.document().should('have.property','charset').and('eq','UTF-8')
        contactUsPage.contactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,'contact us form completed','h1','Thank You for your Message!')


        
    });
    it("Should not be able to submit successful submission form",() =>{

        contactUsPage.contactForm_Submission(data.first_name,data.last_name," "," ",'body','Error: Invalid email address')


    });

})
