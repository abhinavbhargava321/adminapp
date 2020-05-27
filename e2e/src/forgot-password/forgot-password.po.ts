import { browser, by, element } from 'protractor';
export class ForgotPasswordPage {
    navigateTo(){
        return browser.get('/forgot-password');
    }
    getTitle() {
        return element(by.css('.form-wrapper h2'));
    }

    getEmailInput() {
        return element(by.name('email'));
    }

    getLoginButton() {
        return element(by.css('.btn-primary'));
    }
}