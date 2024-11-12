import HomePage from "../../support/pageObjects/webdriver_uni/HomePage";
///<reference types="Cypress" />

describe("Handle js alerts",() =>{
    beforeEach(function(){
         const homepage=new HomePage();
         homepage.visitHomePage();
         homepage.clickAlerts_Popups();
    
    })

    it("Handle js alerts manually",() =>{
        cy.get('#button1').click()
        //handle alerts manually because cypress can handle alerts automatically 
        cy.on('window:alert', (str) =>{
            expect(str).to.eql('I am an alert box!')

        })

    

    });
    it("Handle js confirm(ok) manually",() =>{
        cy.get('#button4').click()
        //handle alerts manually
        cy.on('window:confirm', (str) =>{
            return true;

        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

    

    });
    it("Handle js confirm(cancel) manually",() =>{

        cy.get('#button4').click()
        //handle alerts manually
        cy.on('window:confirm', (str) =>{
            return false;

        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!')

    

    });
    it("Handle js confirm alerts using stubs",() =>{
        const stub=cy.stub()
        cy.on('window:confirm', stub )
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;

        }).then(()=>{
            cy.get('#confirm-alert-text').should('have.text','You pressed OK!')

        })
        
    

    });

})