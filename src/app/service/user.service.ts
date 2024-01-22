import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ILoginPayload,
  IUserResponse,
  IRegisterPayload,
  IUser,
} from 'src/app/Store/Model/LoginRegister.model';
import { HttpApiEndPoints } from 'src/app/api';
import { LocalStorageToken } from 'src/app/localstorage.token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient,
    @Inject(LocalStorageToken) private localStorage: Storage
  ) {}

  loginApiFn(payload: ILoginPayload) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };

    const body: ILoginPayload = {
      email: payload.email,
      password: payload.password,
    };

    return this.http.post<IUserResponse>(
      `${this.config.baseURL}${HttpApiEndPoints.LoginUser}`,
      body,
      options
    );
  }

  registerApiFn(payload: IRegisterPayload) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };

    const body: IRegisterPayload = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      password: payload.password,
      role: payload.role,
    };

    return this.http.post<IUserResponse>(
      `${this.config.baseURL}${HttpApiEndPoints.CreateUser}`,
      body,
      options
    );
  }

  setUserToLocalStore(userData: IUser) {
    this.localStorage.setItem('userdata', JSON.stringify(userData));
  }

  clearUserToLocalStore() {
    this.localStorage.clear()
  }

  getUserFromLocalStore() {
    let _obj: IUser = {
      name: '',
      email: '',
      phone: '',
      role: '',
      userId: 0,
    };
    if (this.localStorage.getItem('userdata') != null) {
      let jsonstring = this.localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    } else {
      return _obj;
    }
  }
}
