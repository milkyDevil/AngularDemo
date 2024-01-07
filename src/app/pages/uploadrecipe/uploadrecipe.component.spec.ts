import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadrecipeComponent } from './uploadrecipe.component';

describe('UploadrecipeComponent', () => {
  let component: UploadrecipeComponent;
  let fixture: ComponentFixture<UploadrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadrecipeComponent]
    });
    fixture = TestBed.createComponent(UploadrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
