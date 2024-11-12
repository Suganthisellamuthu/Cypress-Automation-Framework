/// <reference types="Cypress" />
describe("Handling Data from tables", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("calculate and assert ages of all users", () => {
    var sum = 0
    var age = []
    cy.get("#thumbnail-1 table tbody tr td:nth-child(3)").each(($e1, index, $list) => {
     age[index] = $e1.text()
     
    }).then(() => {
      var i;
      for (i = 0; i < age.length; i++) {
        sum += Number(age[i])

      }
      cy.log("Total age  " + sum)
      expect(sum).to.eq(322)

    });

  });

  it("calculate and assert ages based on the last name", () => {
    cy.get("#thumbnail-1 table tbody tr td:nth-child(2)").each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes('Woods')) {
        cy.get("#thumbnail-1 table tbody tr td:nth-child(2)").eq(index).next().then(function (age) {
          const userAge = age.text()
          expect(userAge).to.eql('80')

        })

      }

    })



  })


})