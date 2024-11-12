class HomePage{
    visitHomePage(){
        cy.visit(Cypress.env("webdriver_uniUrl"));
    }

    clickContactUs_Form(){
        cy.get('#contact-us').invoke('removeAttr' , 'target').click()
    }
    clickAlerts_Popups(){
        cy.get('#popup-alerts').invoke('removeAttr' , 'target').click()
    }

}
export default HomePage;