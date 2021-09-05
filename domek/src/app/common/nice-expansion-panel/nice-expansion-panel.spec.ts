import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiceExpansionPanelComponent } from './nice-expansion-panel.component';

describe('NiceExpansionPanelComponent', () => {
  let component: NiceExpansionPanelComponent;
  let fixture: ComponentFixture<NiceExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiceExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
