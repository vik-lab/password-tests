Feature: Password Reset

  Scenario: Successful password reset
    Given I am on the login page
    When I click the forgot password link
    And I enter a valid email address
    And I click the continue button
    Then I should see a confirmation message

  Scenario: Unsuccessful password with invalid email
    Given I am on the login page
    When I click the forgot password link
    And I enter an invalid email address
    And I click the continue button
    Then I should see an error message