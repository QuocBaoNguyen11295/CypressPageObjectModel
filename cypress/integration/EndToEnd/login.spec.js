import {url} from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('Login Failed Tests',()=>{
    before(()=>{
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with invalid credentials',()=>{
        LoginPage.login('invalid username','invalid password')
    })

    it('should show error message',()=>{
        LoginPage.displayErrorMessage()
    })

    after(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})

describe('Login Success Tests',()=>{
    before(()=>{
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('should try to login with valid credentials',()=>{
        LoginPage.login('username','password')
    })

    it('should verify logging successfully',()=>{
        LoginPage.showLoginSuccessfully()
    })
    
    it('should logout from the application',()=>{
        LoginPage.clickLogout()
    })
    
    it('should logout successfully',()=>{
        LoginPage.showLogoutSuccessfully()
    })
    after(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})