///<reference types="Cypress" />

describe("Post Request", () => {

    it("Validate the post request with status code", () => {

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "Suganthi",
                "job": "QA Automation Engineer"
            }

        }).then(response => {
            expect(response.status).eql(201)

        })

    })
    it("Validate the post request with status code using bearer token", () => {

        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            body: {
                "clientName": "Suganthi jaswan",
                "clientEmail": "jaswan@example.com"
            }

        }).then(response => {
            expect(response.status).eql(201)





        })
    })
    it("Validate the post request with status code using bearer token", () => {
        const token = 'e88a6e31dc39554299c3cba564f23ae6040b7e02792e59c4a1f5740c4edd378a'

        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                Authorization: 'Bearer' + token

            },
            body: {

                "bookId": 1,
                "customerName": "Suganthi jaswan"
            }


        }).then(response => {
            expect(response.status).eql(201)





        })
    })
})