///<reference types="Cypress" />

describe("Delete Request", () => {

    it("Validate the delete request with status code", () => {

        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/1",
           

        }).then(response => {
            expect(response.status).eql(204)





        })







    })
})