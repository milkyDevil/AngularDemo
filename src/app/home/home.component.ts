import { Component, OnInit } from '@angular/core';
import { ResumeSelfInfo } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fullname = 'Mahmuda Begum';
  nickname = 'Milky';
  SelfInfo: ResumeSelfInfo = {
    FullName: 'Mahmuda Begum',
    EmailId: '*******@gmail.com',
    PhoneNumber: '**********',
    Address: '*****',
  };

  constructor() {}
  ngOnInit(): void {}
  FnGoToLoginPage() {}
}
