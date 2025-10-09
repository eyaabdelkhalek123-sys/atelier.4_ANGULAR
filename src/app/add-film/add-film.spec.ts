import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilm } from './add-film';

describe('AddFilm', () => {
  let component: AddFilm;
  let fixture: ComponentFixture<AddFilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFilm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFilm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
