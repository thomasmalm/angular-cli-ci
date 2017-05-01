import { browser, element, by } from 'protractor';

export class AngularCliCiPage {
  navigateTo() {
    return browser.get('/');
  }

  clickButton(text) {
    element(by.buttonText(text)).click();
  }

  setRadius(radius) {
    element(by.id('radius')).sendKeys(radius);
  }

  getResult() {
    return element(by.id('result')).getText();
  }
}
