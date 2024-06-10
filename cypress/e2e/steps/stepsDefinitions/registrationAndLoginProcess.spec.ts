import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { RegistrationProcess } from '../pages/accountRegistration.pageObject';
import { HomePage } from '../pages/homePage.pageObject';
import { LoginAndLogout } from '../pages/myAccount.pageObject';

Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;
});

Given('I navigate to the e-commerce page', function () {
  HomePage.visitPageAndDisagreeCookies();
});

When('I navigate to My Account', function () {
  HomePage.navigateToMyAccount();
});

When('I click create a new account', function () {
  RegistrationProcess.createNewAccount();
});

When('I fill email input with {string}', function (emailKey: string) {
  LoginAndLogout.emailInputClick();
  LoginAndLogout.typeEmail(Cypress.env(emailKey));
});

// TO DO WITHOUT SECURITY ISSUES When(
//   'I fill password input with the {string} and click sign in button',
//   function (passwordKey: string) {
//     LoginAndLogout.this.typePassword(Cypress.env(passwordKey));
//     LoginAndLogout.signIn();
//   },
// );

When('I type verification code', function (email: string) {
  LoginAndLogout.typeVefiricationCode(email);
});

Then('I put a valid email', function () {
  RegistrationProcess.registerValidEmailAddress();
});

Then('I have an account created', function () {
  RegistrationProcess.finishRegistration();
});

Then('I type a non-valid email-address', function () {
  RegistrationProcess.registerInvalidEmailAddress();
});

Then('I see an error message displayed', function () {
  RegistrationProcess.registrationError();
});

Then('I am on My Account page and I am able to log out', function () {
  LoginAndLogout.logOut();
});
