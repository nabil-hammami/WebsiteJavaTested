Feature: Project Online Store : Authentication on the login page
  Only registered customer should be able to log in
  Valid credentials are login=Peter and password=Parker

  @eCommerce
  Scenario: As a registered user, I shouldn't be able to log in if the login is missing
    Given I am connected on the log in page
    When I fill the "password" with "Parker"
    And I fill the "login" with ""
    And I click on the submit button
    Then an error message saying "The login is mandatory" must be displayed

  @eCommerce
  Scenario: As a registered user, I shouldn't be able to log in if the password is missing
    Given I am connected on the log in page
    When I fill the "login" with "Peter"
    And I fill the "password" with ""
    And I click on the submit button
    Then an error message saying "The password is mandatory" must be displayed

  @eCommerce
  Scenario: As a registered user, I should be able to log in with my login and password
    Given I am connected on the log in page
    When I fill the "login" with "Peter"
    And I fill the "password" with "Parker"
    And I click on the submit button
    Then the Order page must be displayed

  @eCommerce
  Scenario Outline: Login and passwords are case sensitive
    Given I am connected on the log in page
    When I fill the "login" with "<login>"
    And I fill the "password" with "<password>"
    And I click on the submit button
    Then an error message saying "Invalid credentials" must be displayed
    Examples:
      | login | password |
      | peter | parker   |
      | pEtEr | pArkeR   |

  @eCommerce
  Scenario Outline: I shouldn't be able to log in with invalid credentials
    Given I am connected on the log in page
    When I fill the "login" with "<login>"
    And I fill the "password" with "<password>"
    And I click on the submit button
    Then an error message saying "Invalid credentials" must be displayed
    Examples:
      | login | password |
      | admin | 1234     |
      | Chuck | Norris   |




