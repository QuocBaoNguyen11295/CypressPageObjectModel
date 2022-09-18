import BasePage from "../BasePage";

export default class SendFeedback extends BasePage{
    static checkTheMessage(){
        cy.fixture('feedback').then((data)=>{
            const name = data.name
            cy.get('#feedback-title').should('have.text','Feedback')
            cy.get('.container > .top_offset > div > div').contains('Thank you for your comments, '+name+'.\n            They will be reviewed by our Customer Service staff and given the full attention that they deserve.\n')
        })
    }
}