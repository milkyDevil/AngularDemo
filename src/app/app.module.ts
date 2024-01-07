import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginregisterComponent } from './pages/loginregister/loginregister.component';
import { UploadrecipeComponent } from './pages/uploadrecipe/uploadrecipe.component';
import { HeadertitleComponent } from './components/headertitle/headertitle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetstartedComponent,
    HeaderComponent,
    FooterComponent,
    RecipeComponent,
    LoginregisterComponent,
    UploadrecipeComponent,
    HeadertitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
