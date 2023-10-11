import { Component, OnInit } from '@angular/core';
import { ResumeSelfInfo } from './resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
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
