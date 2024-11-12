///<reference types="Cypress" />

describe("Variables,promises and nested closures",() =>{
    it("Click on the specific link",() =>{
        cy.visit("https://automationteststore.com/")
        //this is not recommended approach
        // const makeupLink=cy.get("a[href*='product/category&path=']").contains('Makeup')
        // makeupLink.click()

        //Recommended approach
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()

        
    


        
    });
    it("Navigate to specific product page",() =>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        //following code will fail
        // const header=cy.get("h1 .maintext")
        // cy.log(header.text())
        cy.get("h1 .maintext").then(($headerText) =>{
            const headerText=$headerText.text()
            cy.log("headerText : " +headerText)
            expect(headerText).is.eq('Makeup')

        })

        
    


        
    });
    it.only("Validate the properties in contact us page",() =>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //cypress chaining of commands
        cy.contains("#ContactUsFrm",'Contact Us Form').find('#field_11').should('contain','First name:')

        

        //jquery approch
        cy.contains("#ContactUsFrm",'Contact Us Form').then(text =>{
            const firstNameText=text.find('#field_11').text()
            expect(firstNameText).to.contain('First name:')

        })
        //embedded closure
        cy.get('#field_11').then(firstName =>{
            cy.log(firstName.text())

        })
    })

    


        
    });
    
    
    

        
    


        

    
    
    
    
    


