// type definitions for Cypress object "cy"
// <reference types="cypress" />

import HomePage from '../../support/PageObjects/HomePage';
import CheckoutPage from '../../support/PageObjects/CheckoutPage';
import BillingPage from '../../support/PageObjects/BillingPage'

describe('Automation Test Suite ', function() {

    //Mostly used for Setup Part
    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })

    it('My First Test Case', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable

    const homePage=new HomePage();
    const checkoutPage= new CheckoutPage();
    const billingPage=new BillingPage();

    //Calling
    cy.visit(Cypress.env('url'));
    homePage.getUserName().type(this.data.Username);
    homePage.getEmail().type(this.data.Email);
    homePage.getPassword().type(this.data.Password)

    // Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior

    //homePage.getRegisterButton().should('have.attr','disabled','disabled');
    //homePage.getRegisterButton().should('be.disabled');
    // Clicking on to register on the Website by entering new password

    //Pause Command
    //cy.pause();

    homePage.getPassword().type(this.data.NewPassword);
    homePage.getRegisterButton().click();

    //Checking whether the Registration is successful and whether UserName is populated under login section
    homePage.getLoginUserName().should('have.value',this.data.Username);


    //Using Custom Commands
    // For Loop for Accessing productName array from Features File
    this.data.productName.forEach(function(element){
        cy.selectProduct(element[0],element[1],element[2]);

    })
    //End to End Test Completion including Checkout and Placing Order
    checkoutPage.getCartButton().click();
    //Validate if the items we added are successfully there in the cart using should and expect together.
    checkoutPage.getProducts().should(($p) => {
        expect($p).to.have.length(2); // There should be 2 items in cart.
        expect($p.first()).to.contain(this.data.productName[0][0]); // First Element should have blue denim
        expect($p).to.contain(this.data.productName[1][0]); // Verifying that playboy shirt should also be there
    });
    checkoutPage.getCheckoutButton().click();

    // Doing the Login and Entering the Billing Data
    billingPage.getShowLogin().click();
    billingPage.getLoginUserName().type(this.data.Email);
    billingPage.getLoginPassword().type(this.data.Password);
    billingPage.getLoginButton().click();
    billingPage.getBillingFirstName().clear().type(this.data.BillingFirstName);
    billingPage.getBillingLastName().clear().type(this.data.BillingLastName);
    billingPage.getBillingAddress().clear().type(this.data.StreetAddress);

    //Changing the timeout from 4 seconds to 10 seconds
    Cypress.config('defaultCommandTimeout',10000)
    //
    billingPage.getStateDropdown().click().then(function(){
        billingPage.getStateSearchBox().clear().type('Haryana').type('{enter');
    });
    billingPage.getBillingCity().clear().type(this.data.City);
    billingPage.getBillingPostCode().clear().type(this.data.PostalCode);
    billingPage.getBillingPhone().clear().type(this.data.Phone);

    //Placing the Order button click by selecting the checkbox

    billingPage.getTermsCheckbox().click();
    billingPage.getPlaceOrderButton().click();

    // Assertion to check whether order has been successfully placed

    billingPage.getOrderPlacedText().then(function(element){
        expect(element.text().includes("Thank you")).to.be.true;
    })

    //Mostly Used for TearDown Part
    after(function(){
    })

})
})
