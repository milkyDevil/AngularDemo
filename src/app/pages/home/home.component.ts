import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './services/home.service';
import { RecipeObject } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private homeService : HomeService) {}
  data: any;
  DummyImagePath = 'assets/images/UploadPreviewImage.png';
  AllRecipes: RecipeObject[] = []
  navigateToRecipeDetail() {
    this.router.navigate(['/recipe']);
  }
  ngOnInit() {
    this.AllRecipes = this.homeService.getRecipeList()
  }
}
