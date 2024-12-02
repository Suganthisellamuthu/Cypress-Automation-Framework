///<reference types="Cypress" />

describe("Put Request", () => {

    it("Validate the put request with status code", () => {

        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/1",
            body: {
                "name": "Suganthi Yal",
                "job": "QA Automation Tester"
            }

        }).then(response => {
            expect(response.status).eql(200)





        })







    })
})