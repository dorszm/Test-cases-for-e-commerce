import 'cypress-mailosaur';
import {
  loginUrl,
  serverId,
  validUserEmail,
} from '../../config/globalVariables.config';
import 'cypress-if';

export class RegistrationProcess {
  public static emailInput = '#input-email';
  public static submitButton = '#lookup-btn';

  static createNewAccount() {
    const newAccountRegister = '.signin__signup__link';

    cy.url().should('contains', loginUrl);
    cy.get(newAccountRegister).contains('Utwórz konto DECATHLON').click();
    cy.get(RegistrationProcess.emailInput).click();
  }

  static registerValidEmailAddress() {
    const verificationCodeCount = '.verification-code-count';
    const emailInput = '#input-email';
    const submitButton = '#lookup-btn-signup';
    const codeInput = '.otp-input';
    const technicalErrorMessage = '.textfield-error-message';

    cy.url().should('contains', loginUrl);
    cy.get(emailInput).type(validUserEmail);
    cy.log(validUserEmail);
    cy.get(submitButton).click({ timeout: 3500 });
    cy.get(technicalErrorMessage).if('visible');
    cy.get(submitButton).click();
    cy.get(technicalErrorMessage).if('visible');
    cy.get(submitButton).click();
    cy.get(verificationCodeCount).should('not.be.visible');
    cy.mailosaurGetMessage(serverId, {
      sentTo: validUserEmail,
    }).then((email) => {
      const verificationCode = email.html?.codes?.at(0)?.value;
      if (!verificationCode) {
        throw new Error('no code');
      }
      cy.get(codeInput).first().type(verificationCode);
    });
  }

  static finishRegistration() {
    const nextStepButton = '.vtmn-btn';
    const passwordInput = '#input-password';
    const usernamePassword = 'Dba123456!!@453';
    const disagreeCookiesButton = '#didomi-notice-disagree-button';

    cy.url().should('contains', loginUrl);
    cy.get(nextStepButton).contains('Dalej').click();
    cy.get(passwordInput).click();
    cy.get(passwordInput).type(usernamePassword);
    cy.get(nextStepButton).contains('Następny etap').click();
    cy.get(nextStepButton)
      .contains('Potwierdź i kontynuuj')
      .click({ timeout: 10_000 });
    cy.get('p')
      .contains('Jesteś teraz częścią świata Decathlon.')
      .should('be.visible');

    cy.get(disagreeCookiesButton).if('visible').click();
  }

  static registerInvalidEmailAddress() {
    const invalidUserEmail = 'abcded';
    const nextButton = '#lookup-btn-signup';

    cy.url().should('contains', loginUrl);
    cy.get(RegistrationProcess.emailInput).click();
    cy.get(RegistrationProcess.emailInput).type(invalidUserEmail);
    cy.get(nextButton).click();
  }

  static registrationError() {
    const errorMessage = '.textfield-error-message';

    cy.url().should('contains', loginUrl);
    cy.get(errorMessage).contains('Wprowadź prawidłowy format adresu e-mail');
  }
}
