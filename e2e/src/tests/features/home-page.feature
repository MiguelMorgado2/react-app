Feature: As a User I expect to be able to navigate to the home page

    @dev @smoke @regression
    Scenario: As a user I expect to be able to see Book Cart page title
        Given I am on the "home" page
        Then The "page header" should contain the text " Book Cart "
        And The "Search field" should be displayed

        