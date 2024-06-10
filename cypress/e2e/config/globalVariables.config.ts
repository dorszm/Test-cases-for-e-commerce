export const url = Cypress.env('BASE_URL');
export const serverId = Cypress.env('MAILOSAUR_SERVER_ID');
export const randomId = Cypress._.random(1e6);
export const validUserEmail = `dszmajnta-${randomId}@${serverId}.mailosaur.net`;
export const loginUrl = Cypress.env('LOGIN_URL');
export const loggedInUrl = Cypress.env('LOGGED_IN_URL');
