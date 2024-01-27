import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/service/user.service';
import { ToastService } from 'src/app/service/toast.service';
import {
  beginRegister,
  registerSuccess,
  registerFailure,
  beginLogin,
  loginFailure,
  loginSuccess,
} from './User.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffect {
  constructor(
    private action$: Actions,
    private service: UserService,
    private router: Router,
    private toastService: ToastService
  ) {}

  _userregister = createEffect(() =>
    this.action$.pipe(
      ofType(beginRegister),
      exhaustMap((action) =>
        this.service.registerApiFn(action.userdata).pipe(
          map((data) => {
            if (data.status == 'success') {
              this.toastService.showToast('Registration successful', true);
              return registerSuccess({ data: data });
            } else {
              console.log('ajlkajslaks', data);
              this.toastService.showToast('Registration fail', false);
              return registerFailure({ data: data });
            }
          }),
          catchError((error) => {
            this.toastService.showToast('Registration fail', false);
            return of(
              registerFailure({
                data: {
                  status: 'error',
                  message: error.message,
                  data: null,
                },
              })
            );
          })
        )
      )
    )
  );

  _userlogin = createEffect(() =>
    this.action$.pipe(
      ofType(beginLogin),
      exhaustMap((action) =>
        this.service.loginApiFn(action.userdata).pipe(
          map((data) => {
            if (data.data != null) {
              console.log('data.data', data.data);
              this.service.setUserToLocalStore(data.data);
              this.router.navigate(['home']);
              return loginSuccess({ data: data.data });
            } else {
              alert("Don't have access");
              return loginFailure({
                data: data,
              });
            }
          }),
          catchError((error) =>
            of(
              loginFailure({
                data: {
                  status: 'error',
                  message: error.message,
                  data: null,
                },
              })
            )
          )
        )
      )
    )
  );
}
