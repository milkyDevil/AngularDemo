import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UploadrecipeService } from 'src/app/service/uploadrecipe.service';
import { ToastService } from 'src/app/service/toast.service';
import { beginUploadRecipe, uploadrecipeFailure, uploadrecipeSuccess } from './Recipe.action';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RecipeEffect {
  constructor(
    private action$: Actions,
    private service: UploadrecipeService,
    private router: Router,
    private toastService: ToastService
  ) {}

  _uploadrecipe = createEffect(() =>
    this.action$.pipe(
      ofType(beginUploadRecipe),
      exhaustMap((action) =>
        this.service.uploadRecipeApiFn(action.uploadrecipedata).pipe(
          map((data) => {
            if (data.status == 'success') {
              this.toastService.showToast('Upload Recipe successful', true);
              return uploadrecipeSuccess({ data: data });
            } else {
              console.log('uploadrecipedata', data);
              this.toastService.showToast('Upload Recipe fail', false);
              return uploadrecipeFailure({ data: data });
            }
          }),
          catchError((error) => {
            this.toastService.showToast('Registration fail', false);
            return of(
                uploadrecipeFailure({
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

}