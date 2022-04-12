import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRowComponent } from './artist-row.component';

describe('ArtistRowComponent', () => {
  let component: ArtistRowComponent;
  let fixture: ComponentFixture<ArtistRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
