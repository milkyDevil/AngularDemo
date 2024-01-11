import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadrecipe',
  templateUrl: './uploadrecipe.component.html',
  styleUrls: ['./uploadrecipe.component.scss'],
})
export class UploadrecipeComponent {
  constructor(private router: Router) {}
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

