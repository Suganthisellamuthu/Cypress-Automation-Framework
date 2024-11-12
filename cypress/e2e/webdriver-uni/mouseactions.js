///<reference types="Cypress" />

describe("Validate mouse actions", () => {

    it("mouse actions-scrollinto view", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click() //handling multiple tabs
    });


    it("mouse actions-drag and drop", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click() //handling multiple tabs
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    });

    it("mouse actions-double click", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click() //handling multiple tabs
        cy.get('#double-click').dblclick()
    });
    it.only("mouse actions-click and hold", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click() //handling multiple tabs
        cy.get('#click-box').trigger('mousedown',{which : 1}).then(($el)=>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
    });

})