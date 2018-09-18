const I = actor();

module.exports = {
  path: '/budget',
  fields: {
    addName: '//input[@name="description"]',
    addValue: '//input[@name="value"]',
  },
  buttons: {
    add: '//button[text()="Add"]',
  },
  labels: {
    totalInflow: '//div[text()="Total Inflow"]',
  },

  addItem(description, value) {
    I.fillField(this.fields.addName, description);
    I.wait(1);
    I.fillField(this.fields.addValue, value);
    I.wait(1);
    I.click(this.buttons.add);
  },
};
