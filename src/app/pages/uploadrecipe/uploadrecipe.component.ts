import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadrecipe',
  templateUrl: './uploadrecipe.component.html',
  styleUrls: ['./uploadrecipe.component.scss'],
})
export class UploadrecipeComponent implements OnInit {
  recipeForm!: FormGroup; // Add ! to signify it will be initialized in ngOnInit
  recipeCategories: Array<string> = [
    'Curry',
    'Soup',
    'Fry',
    'Bake',
    'Grill',
    'Salad',
    'Dessert',
    'Beverage',
    'Snack',
    'Appetizer',
    'Breakfast',
    'Sandwich',
    'Pizza',
    'Pasta',
    'Rice',
    'Bread',
    'Cake',
    'Cookie',
    'Pie',
    'Ice Cream',
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      vegNonVeg: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
      servingCount: ['', Validators.required],
      calorieCount: ['', Validators.required],
      ingredients: this.fb.array([this.createIngredient()]),
      directionSteps: this.fb.array([this.createDirectionStep()]),
    });
  }

  get ingredientArray(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get directionStepArray(): FormArray {
    return this.recipeForm.get('directionSteps') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  createDirectionStep(): FormGroup {
    return this.fb.group({
      step: ['', Validators.required],
    });
  }

  addIngredient(): void {
    this.ingredientArray.push(this.createIngredient());
  }

  addDirectionStep(): void {
    this.directionStepArray.push(this.createDirectionStep());
  }

  removeIngredient(index: number): void {
    this.ingredientArray.removeAt(index);
  }

  removeDirectionStep(index: number): void {
    this.directionStepArray.removeAt(index);
  }
  

  navigateToHome(): void {
    console.log("hdskjdhk",this.recipeForm)
    if (this.recipeForm.valid) {
      // You can submit the form here
      console.log('Form submitted!');
      this.router.navigate(['/home']);
    } else {
      // Handle invalid form
      console.log('Form is invalid. Cannot submit.');
    }
  }
}
