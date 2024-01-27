import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';
import { SessionStorageToken } from './sessionstorage.token';
import { ToastService } from './service/toast.service';

declare const FEATURE_FLAG: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toastMessage: string = '';
  toastSuccess: boolean = true;

  title = 'angulardemo';
  featureFlag = '';

  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    @Inject(SessionStorageToken) private sessionStorage: Storage,
    private toastService: ToastService
  ) {
    this.featureFlag = FEATURE_FLAG;
    console.log('this.featureFlag', this.featureFlag);
  }

  ngOnInit() {
    this.localStorage.setItem('userName', 'Milky');
    this.sessionStorage.setItem('sessionName', 'Paps');
    this.toastService.toastState.subscribe((toastInfo: any) => {
      console.log("toastInfo",toastInfo)
      this.toastMessage = toastInfo.message;
      this.toastSuccess = toastInfo.success;
    });
  }
}

