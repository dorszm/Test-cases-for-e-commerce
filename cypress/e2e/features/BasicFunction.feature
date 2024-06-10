Feature: Basic Functions

    Background:
        Given I navigate to the e-commerce page
        And I navigate to My Account

    Scenario Outline: As a registered user I can logg in and log out from my account
        When I fill email input with "<email_key>"
        And I type verification code
        Then I am on My Account page and I am able to log out

        Examples:
            | email_key        |
            | VALID_USER_EMAIL |

# TO DO WITHOUT SECURITY ISSUES Scenario Outline: As a user with "<email_key>" and "<password_key>" I want to login into my account and see a <message>
#     When I fill email input with "<email_key>"
#     And I fill password input with the "<password_key>" and click sign in button
#     Then I am on the right "<page>"

#     Examples:
#         | email_key        | password_key          | page          |
#         | VALID_USER_EMAIL | VALID_USER_PASSWORD   | LOGGED_IN_URL |
#         | VALID_USER_EMAIL | INVALID_USER_PASSWORD | loginUrl      |
