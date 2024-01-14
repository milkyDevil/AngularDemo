import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';
import { RecipeObject } from './home';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private homeService: HomeService) {}
  data: any;
  DummyImagePath = 'assets/images/UploadPreviewImage.png';
  AllRecipes: RecipeObject[] = [];
  DummyList: any = [];
  totalBytes : number = 0;

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.complete();
    //observer.error('error')
  });

  navigateToRecipeDetail() {
    this.router.navigate(['/recipe']);
  }

  updateDummyList(newData: any) {
    const indexToUpdate = this.DummyList.findIndex(
      (item: any) => item.id === newData.id
    );
    if (indexToUpdate !== -1) {
      this.DummyList[indexToUpdate] = newData;
    } else {
      console.error(`Item with id ${newData.id} not found in dummylist`);
    }
  }

  removeItemById(idToRemove: number) {
    this.DummyList = this.DummyList.filter(
      (item: any) => item.id !== idToRemove
    );
  }

  ngOnInit() {
    this.AllRecipes = this.homeService.getRecipeList();
    this.stream.subscribe({
      next: (value) => console.log('value', value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
    this.homeService.getDummyList().subscribe((list: any) => {
      this.DummyList.push(list);
      console.log('this.DummyList', this.DummyList);
    });
    this.homeService.postDummyDataInList().subscribe((data) => {
      this.DummyList.push(data);
      console.log('post data', this.DummyList);
    });
    this.homeService.updateDummyDataInList().subscribe((data) => {
      this.updateDummyList(data);
      console.log('modified data', this.DummyList);
    });
    setTimeout(() => {
      this.homeService.deleteDummyDataInList().subscribe(() => {
        this.removeItemById(1);
        console.log('delete data', this.DummyList);
      });
    }, 1000);
    this.homeService.getPhotos().subscribe((event)=>{
      switch(event.type){
        case HttpEventType.Sent:{
          console.log('Request made')
          break;
        }
        case HttpEventType.ResponseHeader:{
          console.log('Request success')
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response:{
          console.log('Request complete',event.body)
          break;
        }
      }
    })
  }
}
