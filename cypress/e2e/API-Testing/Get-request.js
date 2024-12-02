///<reference types="Cypress" />

describe("Get Request", () => {
    var result;
    it("Validate the get request with status code", () => {

        result = cy.request('https://simple-books-api.glitch.me')
        result.its("status").should('equal', 200)







    })
    it("Validate the get request properties from the response message", () => {


        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/books",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))

            expect(body[0]).has.property('name', "The Russian")
            expect(body[0]).has.property('type', "fiction")

            body.forEach(function (books) {
                expect(books).to.have.all.keys("id", "name", "type", "available")
                cy.log("Title:" + books['name'], "available:" + books['available'])

            });
        })
    })
    it("Validate the get request properties specifically response message", () => {


        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/books?type=non-fiction",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))



            body.forEach(function (books) {
                expect(books).to.have.all.keys("id", "name", "type", "available")
                cy.log("Title:" + books['name'], "available:" + books['available'])

            });
        })
    })
    it("validate single user" ,()=>{
        
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/1",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))

            expect((body).data).has.property('first_name', "George")
            

            
            
        })

    })

})
       

       

    
