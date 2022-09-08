import BasePage from "../BasePage"
import Navbar from "../components/Navbar"

export default class LoginPage extends BasePage{
    static login(username,password){
        cy.login(username,password)
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage(){
        cy.isVisible('.alert-error')
    }

    static showLoginSuccessfully(){
        cy.xpath('//h2[1]').should('have.text','Cash Accounts')
    }
    
    static clickLogout(){
        Navbar.clickLogout()
    }

    static showLogoutSuccessfully(){
        cy.xpath('//div[@id="carousel"]/div/div[1]/div/h4').should('have.text','Online Banking')
    }
}