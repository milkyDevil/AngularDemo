import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoginPayload, ILoginResponse } from '../loginregister';
import { HttpApiEndPoints } from 'src/app/api';
import { CommonMixin } from 'src/app/utils/common-mixin';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginregisterService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
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

    return this.http
      .post<ILoginResponse>(
        `${this.config.baseURL}${HttpApiEndPoints.LoginUser}`,
        body,
        options
      )
      //.pipe(catchError(CommonMixin.handleError));
  }
}
