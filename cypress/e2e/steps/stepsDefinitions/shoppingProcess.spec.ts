import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../pages/homePage.pageObject';
import { ProductDetails } from '../pages/productDetails.pageObject';
import { CartPage } from '../pages/cartPage.pageObject';

Given('I am on the home page', function () {
  HomePage.visitPageAndDisagreeCookies();
});

When('I search for a {string}', function (product: string) {
  HomePage.clickSearchAndTypeProductName(product);
});

When('I click on the item details page', function () {
  ProductDetails.showProductDetails();
});

When('I click on the button to add product to my cart', function () {
  ProductDetails.addProductToCart();
});

When('I navigate to the menu and Elektronika category', function () {
  HomePage.sideMenu();
  HomePage.checkElectronikaCategory();
});

When('I check specific {string}', function (groupOfProducts: string) {
  HomePage.checkSpecificTypeOfProduct(groupOfProducts);
});

When('I navigate to Smartwatche', function () {
  HomePage.navigateToSmartwatche();
});

When('I choose filter {string}', function (filter: string) {
  HomePage.applyFilter(filter);
});

When('I choose range {string}', function (specificRange: string) {
  HomePage.applySpecificRange(specificRange);
});

Then('I see results {string}', function (resultsLink: string) {
  HomePage.filterResults(resultsLink);
});

Then('I have a {string} in my shopping cart', function (product: string) {
  CartPage.navigateToCart(product);
});
