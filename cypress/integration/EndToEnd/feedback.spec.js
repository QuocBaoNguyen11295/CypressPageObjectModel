import FeedbackPage from "../../page-objects/pages/FeedbackPage";
import SendFeedback from "../../page-objects/pages/SendFeedback";
describe('Send feedback',()=>{
    before(()=>{
        FeedbackPage.load()
    })

    it('should submit feedback',()=>{
        FeedbackPage.submitFeedback()
    })

    it('should show correct message',()=>{
        SendFeedback.checkTheMessage()
    })

    after(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})