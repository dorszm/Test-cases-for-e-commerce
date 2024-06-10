Feature: Searching and Filters

    Background:
        Given I am on the home page
        And I navigate to the menu and Elektronika category

    Scenario Outline: I want to check "<groupOfProducts>" in Elektronika category
        When I check specific "<groupOfProducts>"
        Then I see results "<resultsLink>"

        Examples:
            | groupOfProducts | resultsLink   |
            | Smartwatche     | /smartwatche  |
            | Pulsometry      | /pulsometry   |
            | Stopery         | /stopery      |
            | Lokalizatory    | /lokalizatory |


    Scenario Outline: I want to check "<specificRange>" in filter "<filter>" for Smartwatche
        When I navigate to Smartwatche
        And I choose filter "<filter>"
        And I choose range "<specificRange>"
        Then I see results "<resultsLink>"

        Examples:
            | filter | specificRange | resultsLink                  |
            | Kolor  | Zielony       | /smartwatche/f-color_zielony |
            | Kolor  | Biały         | /smartwatche/f-color_bialy   |
            | Marka  | MAXCOM        | /smartwatche/f-brand_maxcom  |
            | Marka  | GARET         | /smartwatche/f-brand_garett  |
