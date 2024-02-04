import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRecipePayload, IRecipeResponse } from '../Store/Model/Recipe.model';
import { HttpApiEndPoints } from 'src/app/api';

@Injectable({
  providedIn: 'root'
})
export class UploadrecipeService {

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  uploadRecipeApiFn(payload: IRecipePayload) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };

    const body: IRecipePayload = payload;

    return this.http.post<IRecipeResponse>(
      `${this.config.baseURL}${HttpApiEndPoints.UploadRecipe}`,
      body,
      options
    );
  }
}
