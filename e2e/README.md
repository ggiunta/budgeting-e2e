# E2E Testing

## Test Plan

### Scope
- Functional Testing
- Load Testing

### Approach
- To functionally test the WebApp, a manual test suite will be used. The following is described later on this document
- Automation: A set of tests will be automated in order to support regression testing during the development process
- Load testing will be performed using jMeter. Recording the flow of adding a new item to the budgeting list and then replayed concurrently for 30 users. Expectations are that no timeouts are obtained.

### Functional Test Suite
1. Budget - Add valid budget item
2. Budget - Add budget item with invalid characters
3. Budget - Add empty budget item
4. Budget - Validate Total Inflow value displayed is correct
5. Budget - Validate Total Outflow value displayed is correct
6. Budget - Validate Working Balance value displayed is correct
7. Reports - Validate Inflow vs Outflow graph against data on Budget section
8. Reports - Validate Spending by Category graph against data on Budget section

## Automated tests

### Install & Run
*Install Standalone Selenium Server*
```
npm install selenium-standalone -g
selenium-standalone install
selenium-standalone start
```
*Install project*
```
cd ./e2e
npm install
```
*Run tests*
```
cd ./e2e
./node_modules/.bin/codeceptjs run
```