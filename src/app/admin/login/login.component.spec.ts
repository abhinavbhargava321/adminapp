import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Welcome Back, Login');
    const title = fixture.debugElement.query(By.css('.form-wrapper h2 b')).nativeElement;
    expect(title.innerHTML).toBe('Welcome Back, Login');
  });

  it('should have Submit in "Submit Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    expect(btn.innerHTML).toBe('Submit');
  });

  it('should display email Input text, check with it\'s placeholder', () => {
    const inputEmail = fixture.debugElement.nativeElement.querySelector('input[name="email"]')
    expect(inputEmail.getAttribute('placeholder')).toEqual('Enter email address');
  });

  it('should display password, check with it\'s placeholder', () => {
    const inputPassword = fixture.debugElement.nativeElement.querySelector('input[name="password"]')
    expect(inputPassword.getAttribute('placeholder')).toEqual('Enter your password');
  });

  it("Initialize login form with default email", () => {
    const inputEmail = fixture.debugElement.nativeElement.querySelector('input[name="email"]')
    expect(inputEmail.value).toEqual("");
  });

  it('Forget Password button click redirects to forgot password page', () => {
    fixture.detectChanges();
    let buttonElements = fixture.debugElement.nativeElement.querySelector('.btn-forgot');
    expect(buttonElements.innerHTML).toEqual('Forgot your password?');
    buttonElements.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/forgot-password');
    });
  });

  it('Create an account button click redirects to register page', () => {
    fixture.detectChanges();
    let buttonElements = fixture.debugElement.nativeElement.querySelector('.btn-create');
    expect(buttonElements.innerHTML).toEqual('Create account?');
    buttonElements.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/register');
    });
  });
});
