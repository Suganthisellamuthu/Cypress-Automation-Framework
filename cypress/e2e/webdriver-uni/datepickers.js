///<reference types="Cypress" />

describe("Handle date Pickers", () => {

    it("select date drom datepicker", () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click() //handling multiple tabs

        cy.get('#datepicker').click();
        // let date=new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate())
        // let date1=new Date()
        // date1.setDate(date.getDate() + 5)
        // cy.log(date1.getDate())

        var date = new Date()
        date.setDate(date.getDate() + 30)
        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", { month: "long" })
        var futureDay = date.getDate()
        cy.log(futureDay)
        cy.log(futureMonth)
        cy.log(futureYear)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();

                }

            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })


            })
        }
        function selectFytureDay(){
            cy.get('.day').contains(futureDay).click()
        }
        selectMonthAndYear();
        selectFytureDay();



    });
})