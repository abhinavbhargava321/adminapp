import { DashboardPage } from './dashboard.po';
import { browser, logging } from 'protractor';

describe('Dashboard tests', () => {
    let page: DashboardPage;

    beforeEach(() => {
        page = new DashboardPage();
        page.navigateTo();        
    });

    it('if not logged cclein redirects to login page', () => {
        var isLogin = browser.executeScript("return window.localStorage.getItem('isLogin');");
        if(isLogin == null) {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'dashboard');
        }
        else {
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'login');
        }
    });
    

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
});
