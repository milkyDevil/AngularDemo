import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
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
  recipeImageUrl: string = '';
  selectedCategory: string = '';
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.fb.group({
      recipeImageLink:'',
      recipeName: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(2)])),
      recipeDescription: this.fb.control('', Validators.required),
      vegNonVeg: this.fb.control('Veg', Validators.required),
      category: this.fb.control('', Validators.required),
      time: this.fb.control('', Validators.required),
      servingCount: this.fb.control('', Validators.required),
      calorieCount: this.fb.control('', Validators.required),
      ingredients: this.fb.array([this.createIngredient()]),
      directionSteps: this.fb.array([this.createDirectionStep()]),
    });

    this.recipeForm.get('category')?.valueChanges.subscribe((value: string) => {
      this.selectedCategory = value;
    });
  }

  isFieldInvalid(field: string, index?: number) {
    const control = this.recipeForm.get(field);

    if (control instanceof FormArray) {
      if (index !== undefined) {
        const group = control.at(index) as FormGroup;
        return group.invalid;
      } else {
        let invalid = false;
        control.controls.forEach((ingredientGroup: AbstractControl) => {
          const group = ingredientGroup as FormGroup;
          if (group.invalid) {
            invalid = true;
          }
        });
        return invalid;
      }
    } else {
      return control?.invalid;
    }
}

clearError(field: string, index?: number) {
  const control = this.recipeForm.get(field);

  if (control instanceof FormArray) {
      if (index !== undefined) {
          const group = control.at(index) as FormGroup;
          Object.keys(group.controls).forEach(controlName => {
              const control = group.get(controlName);
              if (control) {
                  control.markAsUntouched();
                  control.setErrors(null); // Reset errors
              }
          });
      } else {
          control.controls.forEach((ingredientGroup: AbstractControl) => {
              const group = ingredientGroup as FormGroup;
              Object.keys(group.controls).forEach(controlName => {
                  const control = group.get(controlName);
                  if (control) {
                      control.markAsUntouched();
                      control.setErrors(null); // Reset errors
                  }
              });
          });
      }
  } else if (control) {
      control.markAsUntouched();
      control.setErrors(null); // Reset errors
  }
}

checkIngredientsValidity(): boolean {
  const ingredientsArray = this.recipeForm.get('ingredients') as FormArray;
  let isValid = true;
  ingredientsArray.controls.forEach((control: AbstractControl<any>) => {
      const group = control as FormGroup;
      if (!group.get('ingredient')?.value || !group.get('quantity')?.value) {
          isValid = false;
      }
  });
  return isValid;
}

checkDirectionStepsValidity(): boolean {
  const directionStepsArray = this.recipeForm.get('directionSteps') as FormArray;
  let isValid = true;
  directionStepsArray.controls.forEach((control: AbstractControl<any>) => {
    const group = control as FormGroup;
    if (!group.get('step')?.value) {
      isValid = false;
    }
  });
  return isValid;
}


markAllAsTouched() {
  Object.keys(this.recipeForm.controls).forEach(field => {
    const control = this.recipeForm.get(field);
    if (control instanceof FormArray) {
      (control as FormArray).controls.forEach((formGroup: AbstractControl) => {
        if (formGroup instanceof FormGroup) {
          Object.keys(formGroup.controls).forEach(innerField => {
            const innerControl = formGroup.get(innerField);
            innerControl?.markAsTouched();
            innerControl?.updateValueAndValidity();
          });
        }
      });
    } else {
      control?.markAsTouched();
      control?.updateValueAndValidity();
    }
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
    
    // Check if there are no existing errors in other fields
    if (!this.hasIngredientErrors()) {
        this.clearError('ingredients');
    }
}

hasIngredientErrors(): boolean {
    return this.ingredientArray.controls.some((control: AbstractControl) => {
        return control.get('ingredient')?.invalid || control.get('quantity')?.invalid;
    });
}



addDirectionStep(): void {
  this.directionStepArray.push(this.createDirectionStep());

  // Check if there are no existing errors in other fields
  if (!this.hasDirectionStepErrors()) {
    this.clearError('directionSteps');
  }
}

hasDirectionStepErrors(): boolean {
  return this.directionStepArray.controls.some((control: AbstractControl) => {
    return control.get('step')?.invalid;
  });
}

  removeIngredient(index: number): void {
    this.ingredientArray.removeAt(index);
  }

  removeDirectionStep(index: number): void {
    this.directionStepArray.removeAt(index);
  }
  

  UploadRecipe(): void {
    this.submitted = true; 
   
    let payload : any = this.recipeForm.value
    payload.userId = 1
    
    console.log("payload",payload)
    if (this.recipeForm.valid && this.checkIngredientsValidity() && this.checkDirectionStepsValidity()) {
        // You can submit the form here
      console.log('Form submitted!');
      //this.router.navigate(['/home']);
    } else {
      // Handle invalid form
      console.log('Form is invalid. Cannot submit.');
      this.markAllAsTouched();
    }
  }
}
