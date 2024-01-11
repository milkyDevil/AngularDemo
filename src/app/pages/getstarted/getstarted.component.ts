import { Component, OnInit } from '@angular/core';
import { ResumeSelfInfo } from './getstarted';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.scss']
})
export class GetstartedComponent implements OnInit {
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
