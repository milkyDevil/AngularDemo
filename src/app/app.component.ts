import { Component } from '@angular/core';
declare const FEATURE_FLAG: string;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo';
  featureFlag = '';

  constructor(){
    this.featureFlag = FEATURE_FLAG
    console.log("this.featureFlag",this.featureFlag)
  }
}
