Feature: The Docs workspace plugin
  Once the plugin is activated and installed, the docs workspace is on the dashboard, and the
  Plugins page lists the plugin with its four steps.

  Scenario: The workspace page is there
    Given I am on "/docs"
     Then I should see "Docs"

  Scenario: The plugin is listed on the Plugins page
    Given I am on "/settings/plugins"
     Then I should see "Docs"
      And I should see "@webship/workspace-docs"
