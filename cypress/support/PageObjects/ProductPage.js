class ProductPage {

    getSearchClick() {
        return cy.get('.noo-search');
    }

    getSearchTextBox(){
        return cy.get('.form-control');
    }

    getProductsName() {
        return cy.get('.noo-product-inner h3');
    }

    getSelectSize() {
        return cy.get('#pa_size');
    }

    getSelectColor() {
        return cy.get('#pa_color');
    }

    getAddtoCartButton() {
        return cy.get('.single_add_to_cart_button');
    }
    
    }

export default ProductPage