import 'cypress-xpath'
export default class Navbar{
    static clickOnLogo(){
        cy.get('.brand').click()
    }

    static search(){
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static clickSignIn(){
        cy.get('#signin_button').click()
    }

    static clickSettings(){
        cy.contains('Settings').click()
    }

    static clickLogout(){
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }
}