class ContactUsPage{
    contactForm_Submission(firstName, lastName, email, comment, $selector, message){
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(message)

    }

}
export default ContactUsPage;