class HomePage {

getUserName() {
    return cy.get('#reg_username');
}

getEmail(){
    return cy.get('#reg_email');
}

getPassword(){
    return cy.get('#reg_password');
}

getLoginUserName(){
    return cy.get('#username');
}

getRegisterButton() {
    return cy.get('.woocommerce-Button');
}

}
export default HomePage