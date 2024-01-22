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
import { beginLogin, beginRegister } from 'src/app/Store/User/User.action';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss'],
})
export class LoginregisterComponent implements OnInit {
  public _errorRegisterName: boolean = false;
  public _errorLoginEmail: boolean = false;
  public _errorLoginPhone: boolean = false;
  public _errorLoginPassword: boolean = false;
  public _errorMessageName: string = '';
  public _errorMessageEmail: string = '';
  public _errorMessagePhone: string = '';
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
    this.validateRegisterName();
    this.validateRegisterEmail();
    this.validateRegisterPhone();
    this.validateRegisterPassword();

    if (this.hasRegisterErrors()) {
      return;
    }

    this.store.dispatch(beginRegister({userdata: this.register}))
  }

  private validateRegisterName(): void {
    const name = this.register.name.trim();
    if (!name) {
      this.showError('name', ErrorMessages.EmptyField);
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      this.showError('name', ErrorMessages.NameLetterSpace);
    }
  }

  private validateRegisterEmail(): void {
    const email = this.register.email.trim();
    if (!email) {
      this.showError('email', ErrorMessages.EmptyField);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showError('email', ErrorMessages.InvalidEmailFormat);
    }
  }

  private validateRegisterPhone(): void {
    const phone = this.register.phone.trim();
    if (!phone) {
      this.showError('phone', ErrorMessages.EmptyField);
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      this.showError('phone', ErrorMessages.InvalidPhoneFormat);
    }
  }

  private validateRegisterPassword(): void {
    const password = this.register.password.trim();
    if (!password) {
      this.showError('password', ErrorMessages.EmptyField);
    }
    if (password.length < 8) {
      this.showError('password', ErrorMessages.PasswordMinChar);
    }
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

  private hasRegisterErrors(): boolean {
    return this._errorRegisterName || this._errorLoginPhone || this._errorLoginEmail || this._errorLoginPassword;
  }

  private showError(field: string, message: string): void {
    if (field === 'name') {
      this._errorRegisterName = true;
      this._errorMessageName = message;
    } else if (field === 'phone') {
      this._errorLoginPhone = true;
      this._errorMessagePhone = message;
    }else if (field === 'email') {
      this._errorLoginEmail = true;
      this._errorMessageEmail = message;
    } else if (field === 'password') {
      this._errorLoginPassword = true;
      this._errorMessagePassword = message;
    }
  }

  private resetFormErrors(): void {
    this._errorRegisterName = false;
    this._errorMessageName = '';
    this._errorLoginEmail = false;
    this._errorMessageEmail = '';
    this._errorLoginPhone = false;
    this._errorMessagePhone = '';
    this._errorLoginPassword = false;
    this._errorMessagePassword = '';
    this.resetFormFields();
  }

  public resetError(field: string): void {
    if (field === 'name' && this.activeTab === 'Register') {
      this._errorRegisterName = false;
      this._errorMessageName = '';
    } else if (field === 'phone') {
      this._errorLoginPhone = false;
      this._errorMessagePhone = '';
    }else if (field === 'email') {
      this._errorLoginEmail = false;
      this._errorMessageEmail = '';
    } else if (field === 'password') {
      this._errorLoginPassword = false;
      this._errorMessagePassword = '';
    }
  }

  private resetFormFields(): void {
    this.login = { email: '', password: '' };
    this.register = { name: '', email: '', phone: '', password: '', role: 'User' };
  }
}
