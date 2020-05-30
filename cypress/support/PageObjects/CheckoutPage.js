class CheckoutPage {
    getCartButton() {
        return cy.get('.cart-item');}
    getProducts() {
        return cy.get('td.product-name');}
    getCheckoutButton(){
        return cy.get('.wc-proceed-to-checkout > .checkout-button');} 
    }
export default CheckoutPage