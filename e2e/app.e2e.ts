import { TinyGradesPage } from './app.po';

describe('tiny-grades App', function() {
  let page: TinyGradesPage;

  beforeEach(() => {
    page = new TinyGradesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tiny-grades works!');
  });
});
