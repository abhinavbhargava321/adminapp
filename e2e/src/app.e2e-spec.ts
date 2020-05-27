import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Router } from  "@angular/router";

describe('App tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should render login page', () => {
    console.log("router", spyOnProperty(spyRouter, 'url', 'get'));
    // expect(browser.location.url()).toEqual('login');
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome Back, Login');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
