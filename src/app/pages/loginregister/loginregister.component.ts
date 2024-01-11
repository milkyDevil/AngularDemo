import { Component } from '@angular/core';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss']
})
export class LoginregisterComponent {
  ActiveTab = 'Login';
  setActiveTab(tab: string) {
    this.ActiveTab = tab;
  }
}
