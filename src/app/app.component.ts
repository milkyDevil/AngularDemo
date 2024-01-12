import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';
import { SessionStorageToken } from './sessionstorage.token';

declare const FEATURE_FLAG: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angulardemo';
  featureFlag = '';

  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    @Inject(SessionStorageToken) private sessionStorage: Storage
  ) {
    this.featureFlag = FEATURE_FLAG;
    console.log('this.featureFlag', this.featureFlag);
  }

  ngOnInit() {
    this.localStorage.setItem('userName', 'Milky');
    this.sessionStorage.setItem('sessionName','Paps')
  }
}
