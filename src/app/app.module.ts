import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserReducer } from './Store/User/User.Reducer';
import { UserEffect } from './Store/User/User.Effects';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

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
    HeadertitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([UserEffect]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({user: UserReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbToastModule
  ],
  providers: [{ provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
