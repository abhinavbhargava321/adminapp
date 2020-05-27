import { ForgotPasswordPage } from './forgot-password.po';
describe('Forget password tests', () => {
    let page: ForgotPasswordPage;
    beforeEach(() => {
        page = new ForgotPasswordPage();
        page.navigateTo();        
    });

    it('should display title', () => {
        expect(page.getTitle().getText()).toEqual('Forgot Password?');
    });
    
    it('should display email Input text, check with it\'s placeholder', () => {
        expect(page.getEmailInput().getAttribute('placeholder')).toEqual('Enter your email address');
    });

    it('should display Submit button', () => {
        expect(page.getLoginButton().getText()).toEqual('Submit');
    });

    it('set value in email Input text', () => {
        expect(page.getEmailInput().sendKeys("test@test.com"));
    });

});
