class BillingPage {
    getShowLogin() {
        return cy.get('.showlogin');}
    getLoginUserName(){
        return cy.get('#username');}
    getLoginPassword(){
        return cy.get('#password');}
    getLoginPassword(){
        return cy.get('#password');}
    getLoginButton(){
        return cy.get('.woocommerce-button') }
    getBillingFirstName(){
        return cy.get('#billing_first_name') }
    getBillingLastName(){
        return cy.get('#billing_last_name') }
    getBillingAddress(){
        return cy.get('#billing_address_1') }
    getStateDropdown(){
        return cy.get('#select2-billing_state-container') }
    getStateSearchBox(){
        return cy.get('.select2-search__field') }
    getBillingCity(){
        return cy.get('#billing_city') }
    getBillingPostCode(){
        return cy.get('#billing_postcode') }
    getBillingPhone(){
        return cy.get('#billing_phone') }
    getTermsCheckbox(){
        return cy.get('#terms') }
    getPlaceOrderButton(){
        return cy.get('#place_order') }
    getOrderPlacedText(){
        return cy.get('.woocommerce-thankyou-order-received') }   
    }
export default BillingPage