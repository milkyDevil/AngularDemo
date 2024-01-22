import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/service/user.service';
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
    private router: Router
  ) {}

  _userregister = createEffect(() =>
    this.action$.pipe(
      ofType(beginRegister),
      exhaustMap((action) =>
        this.service.registerApiFn(action.userdata).pipe(
          map((data) =>
            registerSuccess({
              message: 'Registered successfully',
              resulttype: 'pass',
            })
          ),
          catchError((error) =>
            of(
              registerFailure({
                message: 'Registration failed due to: ' + error.message,
                resulttype: 'fail',
              })
            )
          )
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
              console.log("data.data",data.data)
              this.service.setUserToLocalStore(data.data)
              this.router.navigate(['home']);
              return loginSuccess({ data: data.data });
            } else {
              alert("Don't have access")
              return loginFailure({
                data: data,
              });
            }
          }),
          catchError((error) =>
            of(
              loginFailure({
                data: {
                  status: 'fail',
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
