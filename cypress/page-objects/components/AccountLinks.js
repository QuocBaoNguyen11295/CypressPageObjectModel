export default class AccountLinks{
    static clickAccountSummary(){
        cy.contains('Account Summary').click()
    }

    static clickAccountActivity(){
        cy.contains('Account Activity').click()
    }

    static clickTransferFunds(){
        cy.contains('Transfer Funds').click()
    }

    static clickPayBills(){
        cy.contains('Pay Bills').click()
    }

    static clickMyMoneyMap(){
        cy.contains('My Money Map').click()
    }

    static clickOnlineStatements(){
        cy.contains('Online Statements').click()
    }
}