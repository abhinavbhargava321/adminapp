import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  // should display login page as root page
  it('should display login page as root page', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
