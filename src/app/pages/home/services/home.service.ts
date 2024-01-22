import { Inject, Injectable } from '@angular/core';
import { RecipeObject } from 'src/app/Store/Model/Home.model';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  AllRecipes: RecipeObject[] = [
    {
      RecipeNumber: '01',
      RecipeTitle: 'Delicious Pancakes',
      RecipeImage: 'https://s15.postimg.cc/temvv7u4r/recipe.jpg',
      RecipeDescription:
        'A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day.',
    },
    {
      RecipeNumber: '02',
      RecipeTitle: 'Spaghetti Bolognese',
      RecipeImage:
        'https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg',
      RecipeDescription: 'Classic Italian pasta dish with a rich meat sauce.',
    },
    {
      RecipeNumber: '03',
      RecipeTitle: 'Vegetarian Pizza',
      RecipeImage: '',
      RecipeDescription: 'A flavorful pizza loaded with fresh vegetables.',
    },
    {
      RecipeNumber: '04',
      RecipeTitle: 'Chocolate Chip Cookies',
      RecipeImage: 'https://s15.postimg.cc/temvv7u4r/recipe.jpg',
      RecipeDescription: 'Homemade cookies with gooey chocolate chips.',
    },
    {
      RecipeNumber: '05',
      RecipeTitle: 'Grilled Chicken Salad',
      RecipeImage: '',
      RecipeDescription: 'A healthy and delicious salad with grilled chicken.',
    },
  ];
  DummyList: any = [];

  getDummyList$ = this.http
    .get<any>(`${this.config.apiEndpoint}/posts/1`)
    .pipe(shareReplay(1));

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('env', this.config.apiEndpoint);
  }
  getRecipeList() {
    return this.AllRecipes;
  }
  getDummyList() {
    this.DummyList = this.http.get<any>(`${this.config.apiEndpoint}/posts/1`);
    return this.DummyList;
  }

  postDummyDataInList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    const body = {
      title: 'milky',
      body: 'bar',
      userId: 1,
    };

    return this.http.post<any>(`${this.config.apiEndpoint}/posts`, body, {
      headers,
    });
  }

  updateDummyDataInList() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    const body = {
      id: 1,
      title: 'paps',
      body: 'devil',
      userId: 1,
    };

    return this.http.put<any>(`${this.config.apiEndpoint}/posts/1`, body, {
      headers,
    });
  }

  deleteDummyDataInList() {
    return this.http.delete<any>(`${this.config.apiEndpoint}/posts/1`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `${this.config.apiEndpoint}/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request<any>(request);
  }

  getUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {};

    return this.http.post<any>(
      `${this.config.baseURL}/getuser`,
      body,
      {
        headers,
      }
    );
  }
}
