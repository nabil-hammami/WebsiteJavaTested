Feature: Navigation via the main Menu
  All links must lead to their corresponding page

  # @Menu is a tag aimed to be used with --tag in shell execution : ./node_modules/.bin/cucumber-js --tags @Menu
  @Menu
  Scenario Outline: Clicking on <link> link must load <expectedText> page
    Given I am connected to the website
    When I click on the <link> link
    Then the main frame must contain <expectedText>
    Examples:
      | link                | expectedText    |
#      | Home                | Welcome         |
#      | Projects            | Projects        |
#      | Roadmap             | roadmap.png     |
      | Latest test results | Test Cases |
#      | Logbook             | Logbook         |