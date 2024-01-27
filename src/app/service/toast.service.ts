import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<{ message: string, success: boolean }>();
  toastState = this.toastSubject.asObservable();

  constructor() { }

  showToast(message: string, success: boolean, duration: number = 2000) {
    this.toastSubject.next({ message, success });
    timer(duration).pipe(take(1)).subscribe(() => this.clearToast());
  }

  private clearToast() {
    this.toastSubject.next({ message: '', success: true });
  }
}
