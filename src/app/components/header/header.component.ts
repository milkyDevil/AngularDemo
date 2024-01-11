import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  ShowSideBar: boolean = false;
  setSideBar(val: boolean) {
    this.ShowSideBar = val;
  }
  navigateToUploadRecipe() {
    this.ShowSideBar = false;
    this.router.navigate(['/uploadrecipe']);
  }
  navigateToLoginRegister() {
    this.ShowSideBar = false;
    this.router.navigate(['/loginregister']);
  }
  navigateToHome() {
    this.ShowSideBar = false;
    this.router.navigate(['/home']);
  }
}
