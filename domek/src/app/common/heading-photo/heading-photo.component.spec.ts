import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadingPhotoComponent } from './heading-photo.component';

describe('HeadingPhotoComponent', () => {
  let component: HeadingPhotoComponent;
  let fixture: ComponentFixture<HeadingPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
