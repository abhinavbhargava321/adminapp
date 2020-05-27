import { RegisterPage } from './register.po';
describe('Register tests', () => {
    let page: RegisterPage;
    beforeEach(() => {
        page = new RegisterPage();
        page.navigateTo();        
    });

    it('should display Register page', () => {
        expect(page.getTitle().getText()).toEqual('Create Account');
    });
    
    it('should display email Input text, check with it\'s placeholder', () => {
        expect(page.getEmailInput().getAttribute('placeholder')).toEqual('Enter email address');
    });

    it('should display password Input text, check with it\'s placeholder', () => {
        expect(page.getPasswordInput().getAttribute('placeholder')).toEqual('Enter your password');
    });

    it('should display Submit button', () => {
        expect(page.getLoginButton().getText()).toEqual('Submit');
    });

    it('set value in email Input text', () => {
        expect(page.getEmailInput().sendKeys("abc@test.com"));
    });

    it('set value in pasword Input text', () => {
        expect(page.getPasswordInput().sendKeys("123456"));
    });
});
