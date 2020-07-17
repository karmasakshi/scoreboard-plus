import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundScoresBottomSheetComponent } from './round-scores-bottom-sheet.component';

describe('RoundScoresBottomSheetComponent', () => {
  let component: RoundScoresBottomSheetComponent;
  let fixture: ComponentFixture<RoundScoresBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundScoresBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundScoresBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
