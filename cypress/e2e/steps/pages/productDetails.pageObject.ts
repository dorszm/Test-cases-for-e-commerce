export class ProductDetails {
  static showProductDetails() {
    const productDetailsPage = '.dpb-product-model-link';

    cy.get(productDetailsPage).first().click({ force: true });
  }

  static addProductToCart() {
    const addToCart = '[data-anly="pdp-add-to-cart"]';
    const sideBar = '.sidebar.vtmn-text-content-primary';
    const successMessage = '.precart-header';

    cy.get(addToCart).click({ force: true });
    cy.get(sideBar).should('be.visible');
    cy.get(successMessage).contains('Produkt dodany do koszyka!');
  }
}
