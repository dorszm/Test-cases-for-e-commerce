export class HomePage {
  public static subCategoryElement = '[data-type="sub-category"]';

  static visitPageAndDisagreeCookies() {
    const pageUrl = Cypress.env('BASE_URL');
    const disagreeCookiesButton = '#didomi-notice-disagree-button';

    cy.visit(pageUrl);
    cy.get(disagreeCookiesButton).should('be.visible').click();
  }

  static navigateToMyAccount() {
    const myAccountButton = '[data-anly="tool-zone-account"]';

    cy.get(myAccountButton).click();
  }

  static clickSearchAndTypeProductName(product: string) {
    const searchInput = '[data-anly="global-search-input"]';
    const searchButton = '.vtmn-bg-background-brand-primary';

    cy.get(searchInput).click();
    cy.get(searchInput).type(product);
    cy.get(searchButton).click();
  }

  static sideMenu() {
    const menuButton = '.menu-button';

    cy.get(menuButton).click({ force: true });
  }

  static checkElectronikaCategory() {
    const sideMenuElement = '[data-type="main-category"]';

    cy.get(sideMenuElement).contains('Akcesoria').click();
    cy.get(sideMenuElement).contains('Elektronika').click();
  }

  static checkSpecificTypeOfProduct(groupOfProducts: string) {
    cy.get(HomePage.subCategoryElement).contains(groupOfProducts).click();
  }

  static filterResults(resultsLink: string) {
    cy.url().should('include', resultsLink);
  }

  static navigateToSmartwatche() {
    cy.get(HomePage.subCategoryElement).contains('Smartwatche').click();
  }

  static applyFilter(filter: string) {
    const specificFilterButton = 'span';

    cy.get(specificFilterButton).contains(filter).click();
  }

  static applySpecificRange(specificRange: string) {
    const filterRange = 'span';

    cy.get(filterRange).contains(specificRange).click({ force: true });
  }
}
