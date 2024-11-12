/// <reference types="Cypress" />
describe("Handling file upload", () => {

    it("File upload", () => {
        cy.visit("http://webdriveruniversity.com/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
      cy.get('#myFile').selectFile("cypress/fixtures/nature.jpg")
      cy.get('#submit-button').click()
      
  
    });
    it("No file upload", () => {
        cy.visit("http://webdriveruniversity.com/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
      cy.get('#submit-button').click()

      
  
    });
})