import { Component, OnInit } from '@angular/core';
import { ResumeSelfInfo } from './getstarted';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.scss']
})
export class GetstartedComponent implements OnInit {
  constructor(private router: Router) {}

  fullname = 'Mahmuda Begum';
  nickname = 'Milky';
  SelfInfo: ResumeSelfInfo = {
    FullName: 'Mahmuda Begum',
    EmailId: '*******@gmail.com',
    PhoneNumber: '**********',
    Address: '*****',
  };

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {}
  FnGoToLoginPage() {}
}
