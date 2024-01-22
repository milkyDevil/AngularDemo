import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {
  ILoginPayload,
  IRegisterPayload
} from 'src/app/Store/Model/LoginRegister.model';
import { ErrorMessages } from 'src/app/constants';
import { CommonMixin } from 'src/app/utils/common-mixin';
import { Store } from '@ngrx/store';
import { beginLogin } from 'src/app/Store/User/User.action';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss'],
})
export class LoginregisterComponent implements OnInit {
  public _errorLoginEmail: boolean = false;
  public _errorLoginPassword: boolean = false;
  public _errorMessageEmail: string = '';
  public _errorMessagePassword: string = '';

  public activeTab = 'Login';
  public login: ILoginPayload = { email: '', password: '' };
  public register: IRegisterPayload = { name: '', email: '', phone: '', password: '', role: 'User' };

  constructor(
    private router: Router,
    private loginregisterService: UserService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.loginregisterService.clearUserToLocalStore()
  }

  public setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.resetFormErrors();
  }

  public loginRegisterFn(): void {
    if (this.activeTab === 'Login') {
      this.handleLogin();
    } else {
     // this.router.navigate(['/home']);
      this.handleRegister();
    }
  }

  private handleLogin(): void {
    this.validateEmail();
    this.validatePassword();

    if (this.hasErrors()) {
      return;
    }

    this.store.dispatch(beginLogin({userdata: this.login}))
  }

  private handleRegister():void {
    
  }

  private validateEmail(): void {
    if (!this.login.email.trim()) {
      this.showError('email', ErrorMessages.EmptyField);
    } else {
      this.login.email = CommonMixin.sanitizeEmail(this.login.email);
      if (!CommonMixin.isValidEmail(this.login.email)) {
        this.showError('email', ErrorMessages.InvalidEmailFormat);
      }
    }
  }

  private validatePassword(): void {
    if (!this.login.password.trim()) {
      this.showError('password', ErrorMessages.EmptyField);
    } else {
      if (!CommonMixin.isValidPassword(this.login.password)) {
        this.showError('password', ErrorMessages.InvalidPasswordFormat);
      }
    }
  }

  private hasErrors(): boolean {
    return this._errorLoginEmail || this._errorLoginPassword;
  }

  private showError(field: string, message: string): void {
    if (field === 'email') {
      this._errorLoginEmail = true;
      this._errorMessageEmail = message;
    } else if (field === 'password') {
      this._errorLoginPassword = true;
      this._errorMessagePassword = message;
    }
  }

  private resetFormErrors(): void {
    this._errorLoginEmail = false;
    this._errorMessageEmail = '';
    this._errorLoginPassword = false;
    this._errorMessagePassword = '';
    this.resetFormFields();
  }

  public resetError(field: string): void {
    if (field === 'email' && this.activeTab === 'Login') {
      this._errorLoginEmail = false;
      this._errorMessageEmail = '';
    } else if (field === 'password' && this.activeTab === 'Login') {
      this._errorLoginPassword = false;
      this._errorMessagePassword = '';
    }
  }

  private resetFormFields(): void {
    this.login = { email: '', password: '' };
    this.register = { name: '', email: '', phone: '', password: '', role: 'User' };
  }
}
