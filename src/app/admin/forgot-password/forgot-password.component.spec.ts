import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordComponent } from './forgot-password.component';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let page: ForgotPasswordComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Forgot Password?');
    const title = fixture.debugElement.query(By.css('.form-wrapper h2 b')).nativeElement;
    expect(title.innerHTML).toBe('Forgot Password?');
  });

  it('should have Submit in "Submit Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    expect(btn.innerHTML).toBe('Submit');
  });

  it('should display email Input text, check with it\'s placeholder', () => {
    const inputEmail = fixture.debugElement.nativeElement.querySelector('input[name="email"]')
    expect(inputEmail.getAttribute('placeholder')).toEqual('Enter your email address');
  });

  it('Forget Password button click redirects to login page', () => {
    fixture.detectChanges();
    let buttonElements = fixture.debugElement.nativeElement.querySelector('.btn-login');
    expect(buttonElements.innerHTML).toEqual('Already user? Login');
    buttonElements.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/login');
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
