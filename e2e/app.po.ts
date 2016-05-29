export class TinyGradesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tiny-grades-app h1')).getText();
  }
}
