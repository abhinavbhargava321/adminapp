import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Create Account');
    const title = fixture.debugElement.query(By.css('.form-wrapper h2 b')).nativeElement;
    expect(title.innerHTML).toBe('Create Account');
  });

  it('should have Submit in "Submit Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    expect(btn.innerHTML).toBe('Submit');
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

  it('Login button click redirects to login page', () => {
    fixture.detectChanges();
    let buttonElements = fixture.debugElement.nativeElement.querySelector('.btn-login');
    expect(buttonElements.innerHTML).toEqual('Already user? Login');
    buttonElements.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.pathname).toEqual('/login');
    });
  });
});
