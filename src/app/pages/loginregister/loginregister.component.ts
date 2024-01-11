import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss']
})
export class LoginregisterComponent {
  constructor(private router: Router) {}
  ActiveTab = 'Login';
  setActiveTab(tab: string) {
    this.ActiveTab = tab;
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
