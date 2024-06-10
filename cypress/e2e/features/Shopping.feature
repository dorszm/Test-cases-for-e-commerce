Feature: Shopping

    Background:
        Given I am on the home page

    Scenario Outline: I want to add a "<product>" to my shopping cart
        When I search for a "<product>"
        And I click on the item details page
        And I click on the button to add product to my cart
        Then I have a "<product>" in my shopping cart

        Examples:
            | product    |
            | rower      |
            | latarka    |
            | kask       |
            | piłka      |
            | smartwatch |
