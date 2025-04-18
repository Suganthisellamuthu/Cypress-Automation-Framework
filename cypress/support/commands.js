// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('selectProduct', productName => {

    cy.get('.contentpanel > ul > li > div > a').each(($e1, index, $list) => {
        if ($e1.text() === productName) {

            cy.wrap($e1).click()
        }

    })

})
Cypress.Commands.add('navigateToWebdriveruni_Homepage', () => {
    cy.visit("/")


})

Cypress.Commands.add('navigateToWebdriveruni_checkboxPage', () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")


})


Cypress.Commands.add('webDriverUni_ContactForm_Submission', (firstName, lastName, email, comment, $selector, message) => {

    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(message)

})
Cypress.Commands.add('addItemToCart', productName => {

    cy.get('.fixed_wrapper .prdocutname').each(($e1, index, $list) => {
        if ($e1.text() === productName) {
            cy.log($e1.text())
            cy.get('.productcart').eq(index).click({ force: true })
            cy.go('back')


        }

    })

})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })