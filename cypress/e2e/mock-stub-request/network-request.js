///<reference types="Cypress" />

describe("Network request", () => {
     let message = "mock the status code"
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })


    it("Mock the Response via Get Request", () => {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        },
            {

                body: {
                    "postId": 1,
                    "id": 1,
                    "name": "suganthi",
                    "email": "sugi123@test.com",
                    "body": "Welcome to Mocking"
                }


            }).as('getComment')
        cy.get('.network-btn').click();
        cy.wait('@getComment').its("response.statusCode").should('eq', 200);





    })

    it("Validate the post Request", () => {
        cy.intercept("POST", "/comments").as("postComment")
        cy.get('.network-post').click();
        cy.wait('@postComment').should(({ request, response }) => {
            console.log(request)
            expect(request.body).to.include('email')
            expect(response.body).to.have.property("email", "hello@cypress.io")

        })
    })

    it("Mock the Status code via Put Request", () => {

        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        },
            {

                statusCode: 404,
                body: { error: message },
                delay: 500,
            }).as('putComment')



        cy.get('.network-put').click();
        cy.wait('@putComment')





    })
})





