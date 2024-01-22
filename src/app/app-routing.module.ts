import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginregisterComponent } from './pages/loginregister/loginregister.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { UploadrecipeComponent } from './pages/uploadrecipe/uploadrecipe.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: GetstartedComponent },
  { path: 'loginregister', component: LoginregisterComponent },
  { path: 'home', component: HomeComponent, canActivate:[authGuard] },
  { path: 'recipe', component: RecipeComponent, canActivate:[authGuard]  },
  { path: 'uploadrecipe', component: UploadrecipeComponent, canActivate:[authGuard]  },
  { path: '', redirectTo:'/loginregister', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
