import { browser, by, element } from 'protractor';
export class LoginPage {
    navigateTo(){
        return browser.get('/login');
    }
    getTitle() {
        return element(by.css('.form-wrapper h2'));
    }

    getEmailInput() {
        return element(by.name('email'));
    }

    getPasswordInput() {
        return element(by.name('password'));
    }

    getLoginButton() {
        return element(by.css('.btn-primary'));
    }
}