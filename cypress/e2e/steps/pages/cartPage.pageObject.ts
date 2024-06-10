export class CartPage {
  static navigateToCart(product: string) {
    const navigateToCartButton = '.vtmn-btn';
    const productName = 'product-info';

    cy.get(navigateToCartButton).contains('Idź do koszyka').click();
    cy.url().should('include', 'checkout/cart');
    cy.get(productName).contains(product).should('be.visible');
  }
}
