///<reference types="Cypress" />

describe("Account creation", () => {
    let randomString = Math.random().toString(36).substring(2);
    let email = "auto" + randomString + "@gmail.com";
    beforeEach(() => {
        cy.visit('https://demo.owasp-juice.shop/')
    })
    it('create user account', () => {
        cy.intercept("POST", "https://demo.owasp-juice.shop/api/Users/").as('newAccount')

        cy.get('[aria-label="Close Welcome Banner"]').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get("a[href*='register']").click()
        cy.get('#emailControl').type(email)
        cy.get('#passwordControl').type('pass123')
        cy.get('#repeatPasswordControl').type('pass123')
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-14').click()
        cy.get('#securityAnswerControl').type('HarryPotter')
        cy.get('#registerButton').click({ force: true })
        cy.wait('@newAccount').should(({ request, response }) => {
            //cy.log(request);
            //cy.log("response: " +JSON.stringify(response))
            expect(response.statusCode).to.eq(201)

        })


    })
    it("Validate Login",()=>{
        cy.intercept("POST","https://demo.owasp-juice.shop/rest/user/login").as('loginDetails')
        cy.get('[aria-label="Close Welcome Banner"]').click()
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('#email').type(email)
        cy.get('#password').type('pass123')
        cy.get('#loginButton').click()
        cy.wait('@loginDetails').should(({request,response})=>{
            expect(response.statusCode).to.eql(200)
        })
        cy.get("button[aria-label='Show the shopping cart']").find('span').should('contain'," Your Basket")
    })
})