Feature: Registration on the e-commerce page

    Background:
        Given I navigate to the e-commerce page
        And I navigate to My Account
        When I click create a new account

    Scenario: As a new user I want to create a new account on the page

        Then I put a valid email
        And I have an account created
        And I am on My Account page and I am able to log out

    Scenario: As a new user I cannot create a new account on the page with a non-valid email address

        Then I type a non-valid email-address
        And I see an error message displayed