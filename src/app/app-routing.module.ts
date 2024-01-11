import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginregisterComponent } from './pages/loginregister/loginregister.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { UploadrecipeComponent } from './pages/uploadrecipe/uploadrecipe.component';

const routes: Routes = [
  { path: '', component: GetstartedComponent },
  { path: 'loginregister', component: LoginregisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'uploadrecipe', component: UploadrecipeComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
