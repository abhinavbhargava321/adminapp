import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AppModule } from '../app.module';

describe('AuthService', () => {
  let service: AuthService;
  const assert = require('assert');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should set isLoggedIn to be true on signUp', () => {
    expect(service.isLoggedIn).toBeDefined();
    service.login("test@test.com", "123456").then(() => {
      assert.equal(service.isLoggedIn, true);
    });
  });
  
  it('should set isLoggedIn to be true on signUpfor already created user', () => {
    expect(service.isLoggedIn).toBeDefined();
    service.register("test@test.com", "123").then(() => {
      assert.equal(service.isLoggedIn, false);
    });
  });

  it('should set isLoggedIn to be true on login', () => {
    expect(service.isLoggedIn).toBeDefined();
    service.login("test@test.com", "123456").then(() => {
      assert.equal(service.isLoggedIn, true);
    });
  });

  it('should set isLoggedIn to be false on login for wrong credentials', () => {
    expect(service.isLoggedIn).toBeDefined();
    service.login("test@test.com", "123456789").then(() => {
      assert.equal(service.isLoggedIn, false);
    });
  });

  it('should set isLoggedIn to be false on logout', () => {
    expect(service.isLoggedIn).toBeDefined();
    service.logout().then(() => {
      assert.equal(service.isLoggedIn, false);
    });
  });
});
