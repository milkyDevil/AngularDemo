import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ShowSideBar: boolean = false;
  setSideBar(val: boolean) {
    this.ShowSideBar = val;
  }
}
