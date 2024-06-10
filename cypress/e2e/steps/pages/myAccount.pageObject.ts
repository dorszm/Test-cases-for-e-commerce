import { loginUrl, loggedInUrl } from '../../config/globalVariables.config';
import { serverId } from '../../config/globalVariables.config';

export class LoginAndLogout {
  public static emailLoginInput = '#input-email';

  static emailInputClick() {
    cy.url().should('contains', loginUrl);
    cy.get(LoginAndLogout.emailLoginInput).click();
  }

  static typeEmail(email: string) {
    const nextButton = '#lookup-btn';

    cy.url().should('contains', loginUrl);
    cy.get(LoginAndLogout.emailLoginInput).type(email);
    cy.get(nextButton).click({ timeout: 15_000 });
  }

  static typeVefiricationCode(email: string) {
    const codeInput = '.otp-input';

    cy.url().should('contains', loginUrl);
    cy.mailosaurGetMessage(serverId, {
      sentTo: email,
    }).then((email) => {
      const verificationCode = email.html?.codes?.at(0)?.value;
      if (!verificationCode) {
        throw new Error('no code');
      }
      cy.get(codeInput).first().type(verificationCode);
    });
  }
  // TO USE WITHOUT SECURITY ISSUES static typePassword(password: string) {
  //   const passwordInput = '#input-password';

  //   cy.url().should('contains', loginUrl);
  //   cy.get(passwordInput).type(password);
  // }

  static signIn() {
    const signInButton = '#signin-button';

    cy.url().should('contains', loginUrl);
    cy.get(signInButton).click();
  }
  static logOut() {
    const logOutButton = 'span';

    cy.url().should('contains', loggedInUrl);
    cy.get(logOutButton).contains('Wyloguj').click();
  }
}
