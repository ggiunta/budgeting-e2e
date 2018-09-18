Feature('E2E');

Scenario('Add valid budget item', (I, budgetPage, helpers) => {
  I.amOnPage(budgetPage.path);
  I.waitForVisible(budgetPage.labels.totalInflow);
  budgetPage.addItem(helpers.generateRandomString(), '500');
  I.wait(5);
});
