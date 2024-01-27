import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Store } from '@ngrx/store';
import { beginLogin, beginRegister } from 'src/app/Store/User/User.action';
import { ILoginPayload, IRegisterPayload } from 'src/app/Store/Model/LoginRegister.model';
import { ErrorMessages } from 'src/app/constants';
import { CommonMixin } from 'src/app/utils/common-mixin';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss'],
})
export class LoginregisterComponent implements OnInit {
  public activeTab: string = 'Login';
  public login: ILoginPayload = { email: '', password: '' };
  public register: IRegisterPayload = {
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'User',
  };

  public loginEmail : string = ''
  public loginPassword : string = ''

  public registerName : string = ''
  public registerEmail : string = ''
  public registerPhone : string = ''
  public registerPassword : string = ''

  public _errorRegisterName: boolean = false;
  public _errorLoginEmail: boolean = false;
  public _errorLoginPhone: boolean = false;
  public _errorLoginPassword: boolean = false;
  public _errorMessageName: string = '';
  public _errorMessageEmail: string = '';
  public _errorMessagePhone: string = '';
  public _errorMessagePassword: string = '';

  constructor(
    private router: Router,
    private loginregisterService: UserService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loginregisterService.clearUserToLocalStore();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.resetFormErrors();
  }

  loginRegisterFn(): void {
    if (this.activeTab === 'Login') {
      this.handleLogin();
    } else {
      this.handleRegister();
    }
  }

  handleLogin(): void {
    this.validateEmail();
    this.validatePassword();

    if (this.hasErrors()) {
      return;
    }
    this.login.email = this.loginEmail;
    this.login.password = this.loginPassword;
    this.store.dispatch(beginLogin({ userdata: this.login }));
  }

  handleRegister(): void {
    this.validateRegisterName();
    this.validateRegisterEmail();
    this.validateRegisterPhone();
    this.validateRegisterPassword();

    if (this.hasRegisterErrors()) {
      return;
    }
    this.register.name = this.registerName;
    this.register.email = this.registerEmail;
    this.register.phone = this.registerPhone;
    this.register.password = this.registerPassword;

    this.store.dispatch(beginRegister({ userdata: this.register }));
  }

  validateRegisterName(): void {
    const name = this.registerName.trim();
    if (!name) {
      this.showError('name', ErrorMessages.EmptyField);
      return;
    }
    if (name.length > 20 || !/^[a-zA-Z\s]+$/.test(name) || (name.match(/\s/g) || []).length > 1) {
      this.showError('name', ErrorMessages.InvalidNameFormat);
    }
  }

  validateRegisterEmail(): void {
    const email = this.registerEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.showError('email', ErrorMessages.InvalidEmailFormat);
    }
  }

  validateRegisterPhone(): void {
    const phone = this.registerPhone.trim();
    if (!phone || !/^\d{10}$/.test(phone)) {
      this.showError('phone', ErrorMessages.InvalidPhoneFormat);
    }
  }

  validateRegisterPassword(): void {
    const password = this.registerPassword.trim();
    if (!password || password.length < 8 || password.length > 20) {
      this.showError('password', ErrorMessages.PasswordMinChar);
    }
  }

  validateEmail(): void {
    const email = this.loginEmail.trim();
    if (!email || !CommonMixin.isValidEmail(email)) {
      this.showError('email', ErrorMessages.InvalidEmailFormat);
    }
  }

  validatePassword(): void {
    const password = this.loginPassword.trim();
    if (!password || !CommonMixin.isValidPassword(password)) {
      this.showError('password', ErrorMessages.InvalidPasswordFormat);
    }
  }

  hasErrors(): boolean {
    return this._errorLoginEmail || this._errorLoginPassword;
  }

  hasRegisterErrors(): boolean {
    return (
      this._errorRegisterName ||
      this._errorLoginPhone ||
      this._errorLoginEmail ||
      this._errorLoginPassword
    );
  }

  showError(field: string, message: string): void {
    switch (field) {
      case 'name':
        this._errorRegisterName = true;
        this._errorMessageName = message;
        break;
      case 'phone':
        this._errorLoginPhone = true;
        this._errorMessagePhone = message;
        break;
      case 'email':
        this._errorLoginEmail = true;
        this._errorMessageEmail = message;
        break;
      case 'password':
        this._errorLoginPassword = true;
        this._errorMessagePassword = message;
        break;
    }
  }

  resetFormErrors(): void {
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

  resetError(field: string): void {
    switch (field) {
      case 'name':
        this._errorRegisterName = false;
        this._errorMessageName = '';
        break;
      case 'phone':
        this._errorLoginPhone = false;
        this._errorMessagePhone = '';
        break;
      case 'email':
        this._errorLoginEmail = false;
        this._errorMessageEmail = '';
        break;
      case 'password':
        this._errorLoginPassword = false;
        this._errorMessagePassword = '';
        break;
    }
  }

  resetFormFields(): void {
    this.login = { email: '', password: '' };
    this.register = { name: '', email: '', phone: '', password: '', role: 'User' };
  }
}
