///<reference types="Cypress" />

describe("Test Contact us form via automationteststore",() =>{

    before(function(){
        cy.fixture('userDetails').as("user")
    })
    it("Should be able to submit successful submission form",() =>{
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get("a[href$='contact']").click().then(function(contactText){
            console.log("contact us text  " +contactText.text())
        })
        cy.get('@user').then(user=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        //$ sign is to find endwith text for css and ^ sign is for start with

        cy.get('#ContactUsFrm_enquiry').type("contact us form submitted")
        cy.get('button[title="Submit"]').click()
        //cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.xpath("//p[text()='Your enquiry has been successfully sent to the store owner!']").should('have.text','Your enquiry has been successfully sent to the store owner!')
    


        
    });


})
