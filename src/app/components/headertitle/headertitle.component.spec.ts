import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertitleComponent } from './headertitle.component';

describe('HeadertitleComponent', () => {
  let component: HeadertitleComponent;
  let fixture: ComponentFixture<HeadertitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadertitleComponent]
    });
    fixture = TestBed.createComponent(HeadertitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
