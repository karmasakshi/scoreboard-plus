import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardEditorPageComponent } from './scoreboard-editor-page.component';

describe('ScoreboardEditorPageComponent', () => {
  let component: ScoreboardEditorPageComponent;
  let fixture: ComponentFixture<ScoreboardEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
