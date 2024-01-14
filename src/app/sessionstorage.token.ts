import { InjectionToken } from '@angular/core';

export const SessionStorageToken = new InjectionToken<any>('session storage', {
  providedIn: 'root',
  factory() {
    return sessionStorage;
  },
});
